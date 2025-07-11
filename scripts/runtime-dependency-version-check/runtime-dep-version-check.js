#!/usr/bin/env node

/**
 * This script checks the declared dependencies throughout the entire repo
 * and throws an error if there is are more than one version of a dependency.
 *
 * @example
 * ```
 * There is more than one version of a declared runtime dependency
 * @smithy/middleware-endpoint {
 *   '^1.0.2': '350 locations',
 *   '^1.0.1': [
 *     '@aws-sdk/lib-storage',
 *     '@aws-sdk/middleware-sdk-ec2',
 *     '@aws-sdk/middleware-sdk-rds',
 *     '@aws-sdk/s3-presigned-post',
 *     '@aws-sdk/s3-request-presigner'
 *   ]
 * }
 * ```
 */

const fs = require("fs");
const path = require("path");
const { listFolders } = require("../utils/list-folders");

const root = path.join(__dirname, "..", "..");

const clients = listFolders(path.join(root, "clients"), false);
const lib = listFolders(path.join(root, "lib"), false);
const packages = listFolders(path.join(root, "packages"), false);
const _private = listFolders(path.join(root, "private"), false);

const setCanonicalVersion = process.argv.includes("--set-smithy-version");
const colocatedSmithy = fs.existsSync(path.join(root, "..", "smithy-typescript", "packages"));

const clientPackages = [...clients, ..._private.filter((p) => !p.endsWith("-test"))];

const nonClientPackages = [...lib, ...packages, ..._private.filter((p) => p.endsWith("-test"))];

const deps = {
  /* @namespace/name: {
    [version]: [location, location]
  } */
};

const ignored = ["vitest"];

readPackages(clientPackages);
checkVersions();

for (const pkg of nonClientPackages) {
  const pkgJsonPath = path.join(pkg, "package.json");

  // Check if package.json exists before requiring it
  if (!fs.existsSync(pkgJsonPath)) {
    continue;
  }

  const pkgJson = require(pkgJsonPath);
  const { dependencies = {}, devDependencies = {} } = pkgJson;

  for (const [name, version] of Object.entries(dependencies)) {
    if (version.startsWith("file:")) {
      continue;
    }
    if (name.startsWith("@smithy") && deps[name]) {
      const newVersion = Object.keys(deps[name] ?? {})[0];
      if (newVersion && pkgJson.dependencies[name] !== newVersion) {
        console.log("set", pkgJson.name, "dependencies", name, "to", newVersion);
        pkgJson.dependencies[name] = newVersion;
      }
    } else if (name.startsWith("@smithy")) {
      if (colocatedSmithy && setCanonicalVersion) {
        const pkgFolderName = name.replace("@smithy/", "");
        const canonicalVersion = require(path.join(
          root,
          "..",
          "smithy-typescript",
          "packages",
          pkgFolderName,
          "package.json"
        )).version;
        if (pkgJson.dependencies[name] !== `^${canonicalVersion}`) {
          pkgJson.dependencies[name] = `^${canonicalVersion}`;
          console.log("[--set-smithy-version=true] set", pkgJson.name, "dependencies", name, "to", canonicalVersion);
        }
      }
    }
  }

  for (const [name, version] of Object.entries(devDependencies)) {
    if (version.startsWith("file:")) {
      continue;
    }
    if (name.startsWith("@smithy") && deps[name]) {
      const newVersion = Object.keys(deps[name] ?? {})[0];
      if (newVersion && pkgJson.devDependencies[name] !== newVersion) {
        console.log("set", pkgJson.name, "devDependencies", name, "to", newVersion);
        pkgJson.devDependencies[name] = newVersion;
      }
    } else if (name.startsWith("@smithy")) {
      if (colocatedSmithy && setCanonicalVersion) {
        const pkgFolderName = name.replace("@smithy/", "");
        const canonicalVersion = require(path.join(
          root,
          "..",
          "smithy-typescript",
          "packages",
          pkgFolderName,
          "package.json"
        )).version;
        if (pkgJson.devDependencies[name] !== `^${canonicalVersion}`) {
          pkgJson.devDependencies[name] = `^${canonicalVersion}`;
          console.log("[--set-smithy-version=true] set", pkgJson.name, "dependencies", name, "to", canonicalVersion);
        }
      }
    }
  }

  fs.writeFileSync(pkgJsonPath, JSON.stringify(pkgJson, null, 2) + "\n", "utf-8");
}

readPackages(nonClientPackages);
checkVersions();

function checkVersions() {
  const errors = [];

  for (const [pkg, versions] of Object.entries(deps)) {
    if (ignored.includes(pkg)) {
      continue;
    }
    const versionCount = Object.keys(versions).length;
    if (versionCount > 1) {
      console.error("There is more than one version of a declared runtime dependency.");
      console.error(
        pkg,
        Object.entries(versions).reduce((acc, [version, locations]) => {
          acc[version] = locations.length > 20 ? `${locations.length} locations` : locations;
          return acc;
        }, {})
      );
      errors.push(pkg);
    }
  }

  if (errors.length) {
    const violations = errors.join(", ");
    throw new Error(violations + " have inconsistent declared versions.");
  }
}

function readPackages(packages) {
  for (const pkg of packages) {
    const pkgJsonPath = path.join(pkg, "package.json");

    // Check if package.json exists before requiring it
    if (!fs.existsSync(pkgJsonPath)) {
      continue;
    }

    const pkgJson = require(pkgJsonPath);
    const { dependencies = {}, devDependencies = {} } = pkgJson;
    for (const [name, version] of Object.entries(dependencies)) {
      if (version.startsWith("file:")) {
        continue;
      }
      deps[name] = deps[name] ?? {};
      deps[name][version] = deps[name][version] ?? [];
      deps[name][version].push(pkgJson.name);
    }

    for (const [name, version] of Object.entries(devDependencies)) {
      if (version.startsWith("file:")) {
        continue;
      }
      deps[name] = deps[name] ?? {};
      deps[name][version] = deps[name][version] ?? [];
      deps[name][version].push(pkgJson.name);
    }
  }
}
