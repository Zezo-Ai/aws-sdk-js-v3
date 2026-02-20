// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/signer-data.json */

const i="ref";
const a=true,
b=false,
c="String",
d="endpoint",
e={"required":true,"type":"Boolean","default":false},
f={[i]:"Endpoint"},
g={"fn":"booleanEquals","argv":[{[i]:"UseFIPS"},true]},
h={"fn":"booleanEquals","argv":[{[i]:"UseDualStack"},true]};
const _data={version:"1.0",parameters:{Region:{required:a,type:c},UseFIPS:e,UseDualStack:e,Endpoint:{required:b,type:c}},rules:[{type:d,conditions:[{fn:"isSet",argv:[f]}],endpoint:{url:f}},{type:"tree",conditions:[{fn:"aws.partition",argv:[{[i]:"Region"}],assign:"PartitionResult"}],rules:[{type:d,conditions:[g,h],endpoint:{url:"https://data-signer-fips.{Region}.{PartitionResult#dualStackDnsSuffix}"}},{type:d,conditions:[g],endpoint:{url:"https://data-signer-fips.{Region}.{PartitionResult#dnsSuffix}"}},{type:d,conditions:[h],endpoint:{url:"https://data-signer.{Region}.{PartitionResult#dualStackDnsSuffix}"}},{type:d,endpoint:{url:"https://data-signer.{Region}.{PartitionResult#dnsSuffix}"}}]}]};
export const ruleSet: RuleSetObject = _data;
