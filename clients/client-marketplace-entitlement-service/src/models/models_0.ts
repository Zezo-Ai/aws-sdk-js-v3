// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { MarketplaceEntitlementServiceServiceException as __BaseException } from "./MarketplaceEntitlementServiceServiceException";

/**
 * @public
 * @enum
 */
export const GetEntitlementFilterName = {
  CUSTOMER_AWS_ACCOUNT_ID: "CUSTOMER_AWS_ACCOUNT_ID",
  CUSTOMER_IDENTIFIER: "CUSTOMER_IDENTIFIER",
  DIMENSION: "DIMENSION",
} as const;

/**
 * @public
 */
export type GetEntitlementFilterName = (typeof GetEntitlementFilterName)[keyof typeof GetEntitlementFilterName];

/**
 * <p>The GetEntitlementsRequest contains parameters for the GetEntitlements
 *    operation.</p>
 * @public
 */
export interface GetEntitlementsRequest {
  /**
   * <p>Product code is used to uniquely identify a product in AWS Marketplace. The product code
   *    will be provided by AWS Marketplace when the product listing is created.</p>
   * @public
   */
  ProductCode: string | undefined;

  /**
   * <p>Filter is used to return entitlements for a specific customer or for a specific
   *       dimension. Filters are described as keys mapped to a lists of values. Filtered requests are
   *         <i>unioned</i> for each value in the value list, and then
   *         <i>intersected</i> for each filter key.</p>
   *          <p>
   *             <code>CustomerIdentifier</code> and <code>CustomerAWSAccountID</code> are mutually exclusive. You can't specify both in the same request.
   *    </p>
   * @public
   */
  Filter?: Partial<Record<GetEntitlementFilterName, string[]>> | undefined;

  /**
   * <p>For paginated calls to GetEntitlements, pass the NextToken from the previous
   *    GetEntitlementsResult.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to retrieve from the GetEntitlements operation. For
   *    pagination, use the NextToken field in subsequent calls to GetEntitlements.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>The EntitlementValue represents the amount of capacity that the customer is entitled to
 *    for the product.</p>
 * @public
 */
export interface EntitlementValue {
  /**
   * <p>The IntegerValue field will be populated with an integer value when the entitlement is an
   *    integer type. Otherwise, the field will not be set.</p>
   * @public
   */
  IntegerValue?: number | undefined;

  /**
   * <p>The DoubleValue field will be populated with a double value when the entitlement is a
   *    double type. Otherwise, the field will not be set.</p>
   * @public
   */
  DoubleValue?: number | undefined;

  /**
   * <p>The BooleanValue field will be populated with a boolean value when the entitlement is a
   *       boolean type. Otherwise, the field will not be set.</p>
   * @public
   */
  BooleanValue?: boolean | undefined;

  /**
   * <p>The StringValue field will be populated with a string value when the entitlement is a
   *    string type. Otherwise, the field will not be set.</p>
   * @public
   */
  StringValue?: string | undefined;
}

/**
 * <p>An entitlement represents capacity in a product owned by the customer. For example, a
 *       customer might own some number of users or seats in an SaaS application or  some amount of
 *       data capacity in a multi-tenant database.</p>
 * @public
 */
export interface Entitlement {
  /**
   * <p>The product code for which the given entitlement applies. Product codes are provided by
   *    AWS Marketplace when the product listing is created.</p>
   * @public
   */
  ProductCode?: string | undefined;

  /**
   * <p>The dimension for which the given entitlement applies. Dimensions represent categories of
   *       capacity in a product and are specified when the product is listed in AWS
   *       Marketplace.</p>
   * @public
   */
  Dimension?: string | undefined;

  /**
   * <p>The customer identifier is a handle to each unique customer in an application. Customer
   *    identifiers are obtained through the ResolveCustomer operation in AWS Marketplace Metering
   *    Service.</p>
   * @public
   */
  CustomerIdentifier?: string | undefined;

  /**
   * <p>
   *       The <code>CustomerAWSAccountID</code> parameter specifies the AWS account ID of the buyer.
   *     </p>
   * @public
   */
  CustomerAWSAccountId?: string | undefined;

  /**
   * <p>The EntitlementValue represents the amount of capacity that the customer is entitled to
   *    for the product.</p>
   * @public
   */
  Value?: EntitlementValue | undefined;

  /**
   * <p>The expiration date represents the minimum date through which this entitlement is
   *    expected to remain valid. For contractual products listed on AWS Marketplace, the expiration date
   *    is the date at which the customer will renew or cancel their contract. Customers who are opting
   *    to renew their contract will still have entitlements with an expiration date.</p>
   * @public
   */
  ExpirationDate?: Date | undefined;
}

/**
 * <p>The GetEntitlementsRequest contains results from the GetEntitlements operation.</p>
 * @public
 */
export interface GetEntitlementsResult {
  /**
   * <p>The set of entitlements found through the GetEntitlements operation. If the result
   *       contains an empty set of entitlements, NextToken might still be present and should be
   *       used.</p>
   * @public
   */
  Entitlements?: Entitlement[] | undefined;

  /**
   * <p>For paginated results, use NextToken in subsequent calls to GetEntitlements. If the
   *       result contains an empty set of entitlements, NextToken might still be present and should be
   *       used.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>An internal error has occurred. Retry your request. If the problem persists, post a
 *    message with details on the AWS forums.</p>
 * @public
 */
export class InternalServiceErrorException extends __BaseException {
  readonly name: "InternalServiceErrorException" = "InternalServiceErrorException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServiceErrorException, __BaseException>) {
    super({
      name: "InternalServiceErrorException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServiceErrorException.prototype);
  }
}

/**
 * <p>One or more parameters in your request was invalid.</p>
 * @public
 */
export class InvalidParameterException extends __BaseException {
  readonly name: "InvalidParameterException" = "InvalidParameterException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterException, __BaseException>) {
    super({
      name: "InvalidParameterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterException.prototype);
  }
}

/**
 * <p>The calls to the GetEntitlements API are throttled.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
  }
}
