// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CancelCapacityTaskCommand,
  CancelCapacityTaskCommandInput,
  CancelCapacityTaskCommandOutput,
} from "./commands/CancelCapacityTaskCommand";
import { CancelOrderCommand, CancelOrderCommandInput, CancelOrderCommandOutput } from "./commands/CancelOrderCommand";
import { CreateOrderCommand, CreateOrderCommandInput, CreateOrderCommandOutput } from "./commands/CreateOrderCommand";
import {
  CreateOutpostCommand,
  CreateOutpostCommandInput,
  CreateOutpostCommandOutput,
} from "./commands/CreateOutpostCommand";
import { CreateSiteCommand, CreateSiteCommandInput, CreateSiteCommandOutput } from "./commands/CreateSiteCommand";
import {
  DeleteOutpostCommand,
  DeleteOutpostCommandInput,
  DeleteOutpostCommandOutput,
} from "./commands/DeleteOutpostCommand";
import { DeleteSiteCommand, DeleteSiteCommandInput, DeleteSiteCommandOutput } from "./commands/DeleteSiteCommand";
import {
  GetCapacityTaskCommand,
  GetCapacityTaskCommandInput,
  GetCapacityTaskCommandOutput,
} from "./commands/GetCapacityTaskCommand";
import {
  GetCatalogItemCommand,
  GetCatalogItemCommandInput,
  GetCatalogItemCommandOutput,
} from "./commands/GetCatalogItemCommand";
import {
  GetConnectionCommand,
  GetConnectionCommandInput,
  GetConnectionCommandOutput,
} from "./commands/GetConnectionCommand";
import { GetOrderCommand, GetOrderCommandInput, GetOrderCommandOutput } from "./commands/GetOrderCommand";
import {
  GetOutpostBillingInformationCommand,
  GetOutpostBillingInformationCommandInput,
  GetOutpostBillingInformationCommandOutput,
} from "./commands/GetOutpostBillingInformationCommand";
import { GetOutpostCommand, GetOutpostCommandInput, GetOutpostCommandOutput } from "./commands/GetOutpostCommand";
import {
  GetOutpostInstanceTypesCommand,
  GetOutpostInstanceTypesCommandInput,
  GetOutpostInstanceTypesCommandOutput,
} from "./commands/GetOutpostInstanceTypesCommand";
import {
  GetOutpostSupportedInstanceTypesCommand,
  GetOutpostSupportedInstanceTypesCommandInput,
  GetOutpostSupportedInstanceTypesCommandOutput,
} from "./commands/GetOutpostSupportedInstanceTypesCommand";
import {
  GetSiteAddressCommand,
  GetSiteAddressCommandInput,
  GetSiteAddressCommandOutput,
} from "./commands/GetSiteAddressCommand";
import { GetSiteCommand, GetSiteCommandInput, GetSiteCommandOutput } from "./commands/GetSiteCommand";
import {
  ListAssetInstancesCommand,
  ListAssetInstancesCommandInput,
  ListAssetInstancesCommandOutput,
} from "./commands/ListAssetInstancesCommand";
import { ListAssetsCommand, ListAssetsCommandInput, ListAssetsCommandOutput } from "./commands/ListAssetsCommand";
import {
  ListBlockingInstancesForCapacityTaskCommand,
  ListBlockingInstancesForCapacityTaskCommandInput,
  ListBlockingInstancesForCapacityTaskCommandOutput,
} from "./commands/ListBlockingInstancesForCapacityTaskCommand";
import {
  ListCapacityTasksCommand,
  ListCapacityTasksCommandInput,
  ListCapacityTasksCommandOutput,
} from "./commands/ListCapacityTasksCommand";
import {
  ListCatalogItemsCommand,
  ListCatalogItemsCommandInput,
  ListCatalogItemsCommandOutput,
} from "./commands/ListCatalogItemsCommand";
import { ListOrdersCommand, ListOrdersCommandInput, ListOrdersCommandOutput } from "./commands/ListOrdersCommand";
import {
  ListOutpostsCommand,
  ListOutpostsCommandInput,
  ListOutpostsCommandOutput,
} from "./commands/ListOutpostsCommand";
import { ListSitesCommand, ListSitesCommandInput, ListSitesCommandOutput } from "./commands/ListSitesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  StartCapacityTaskCommand,
  StartCapacityTaskCommandInput,
  StartCapacityTaskCommandOutput,
} from "./commands/StartCapacityTaskCommand";
import {
  StartConnectionCommand,
  StartConnectionCommandInput,
  StartConnectionCommandOutput,
} from "./commands/StartConnectionCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateOutpostCommand,
  UpdateOutpostCommandInput,
  UpdateOutpostCommandOutput,
} from "./commands/UpdateOutpostCommand";
import {
  UpdateSiteAddressCommand,
  UpdateSiteAddressCommandInput,
  UpdateSiteAddressCommandOutput,
} from "./commands/UpdateSiteAddressCommand";
import { UpdateSiteCommand, UpdateSiteCommandInput, UpdateSiteCommandOutput } from "./commands/UpdateSiteCommand";
import {
  UpdateSiteRackPhysicalPropertiesCommand,
  UpdateSiteRackPhysicalPropertiesCommandInput,
  UpdateSiteRackPhysicalPropertiesCommandOutput,
} from "./commands/UpdateSiteRackPhysicalPropertiesCommand";
import { OutpostsClient, OutpostsClientConfig } from "./OutpostsClient";

const commands = {
  CancelCapacityTaskCommand,
  CancelOrderCommand,
  CreateOrderCommand,
  CreateOutpostCommand,
  CreateSiteCommand,
  DeleteOutpostCommand,
  DeleteSiteCommand,
  GetCapacityTaskCommand,
  GetCatalogItemCommand,
  GetConnectionCommand,
  GetOrderCommand,
  GetOutpostCommand,
  GetOutpostBillingInformationCommand,
  GetOutpostInstanceTypesCommand,
  GetOutpostSupportedInstanceTypesCommand,
  GetSiteCommand,
  GetSiteAddressCommand,
  ListAssetInstancesCommand,
  ListAssetsCommand,
  ListBlockingInstancesForCapacityTaskCommand,
  ListCapacityTasksCommand,
  ListCatalogItemsCommand,
  ListOrdersCommand,
  ListOutpostsCommand,
  ListSitesCommand,
  ListTagsForResourceCommand,
  StartCapacityTaskCommand,
  StartConnectionCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateOutpostCommand,
  UpdateSiteCommand,
  UpdateSiteAddressCommand,
  UpdateSiteRackPhysicalPropertiesCommand,
};

export interface Outposts {
  /**
   * @see {@link CancelCapacityTaskCommand}
   */
  cancelCapacityTask(
    args: CancelCapacityTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelCapacityTaskCommandOutput>;
  cancelCapacityTask(
    args: CancelCapacityTaskCommandInput,
    cb: (err: any, data?: CancelCapacityTaskCommandOutput) => void
  ): void;
  cancelCapacityTask(
    args: CancelCapacityTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelCapacityTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelOrderCommand}
   */
  cancelOrder(args: CancelOrderCommandInput, options?: __HttpHandlerOptions): Promise<CancelOrderCommandOutput>;
  cancelOrder(args: CancelOrderCommandInput, cb: (err: any, data?: CancelOrderCommandOutput) => void): void;
  cancelOrder(
    args: CancelOrderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelOrderCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateOrderCommand}
   */
  createOrder(args: CreateOrderCommandInput, options?: __HttpHandlerOptions): Promise<CreateOrderCommandOutput>;
  createOrder(args: CreateOrderCommandInput, cb: (err: any, data?: CreateOrderCommandOutput) => void): void;
  createOrder(
    args: CreateOrderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateOrderCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateOutpostCommand}
   */
  createOutpost(args: CreateOutpostCommandInput, options?: __HttpHandlerOptions): Promise<CreateOutpostCommandOutput>;
  createOutpost(args: CreateOutpostCommandInput, cb: (err: any, data?: CreateOutpostCommandOutput) => void): void;
  createOutpost(
    args: CreateOutpostCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateOutpostCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSiteCommand}
   */
  createSite(args: CreateSiteCommandInput, options?: __HttpHandlerOptions): Promise<CreateSiteCommandOutput>;
  createSite(args: CreateSiteCommandInput, cb: (err: any, data?: CreateSiteCommandOutput) => void): void;
  createSite(
    args: CreateSiteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSiteCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteOutpostCommand}
   */
  deleteOutpost(args: DeleteOutpostCommandInput, options?: __HttpHandlerOptions): Promise<DeleteOutpostCommandOutput>;
  deleteOutpost(args: DeleteOutpostCommandInput, cb: (err: any, data?: DeleteOutpostCommandOutput) => void): void;
  deleteOutpost(
    args: DeleteOutpostCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteOutpostCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSiteCommand}
   */
  deleteSite(args: DeleteSiteCommandInput, options?: __HttpHandlerOptions): Promise<DeleteSiteCommandOutput>;
  deleteSite(args: DeleteSiteCommandInput, cb: (err: any, data?: DeleteSiteCommandOutput) => void): void;
  deleteSite(
    args: DeleteSiteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSiteCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCapacityTaskCommand}
   */
  getCapacityTask(
    args: GetCapacityTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCapacityTaskCommandOutput>;
  getCapacityTask(args: GetCapacityTaskCommandInput, cb: (err: any, data?: GetCapacityTaskCommandOutput) => void): void;
  getCapacityTask(
    args: GetCapacityTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCapacityTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCatalogItemCommand}
   */
  getCatalogItem(
    args: GetCatalogItemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCatalogItemCommandOutput>;
  getCatalogItem(args: GetCatalogItemCommandInput, cb: (err: any, data?: GetCatalogItemCommandOutput) => void): void;
  getCatalogItem(
    args: GetCatalogItemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCatalogItemCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConnectionCommand}
   */
  getConnection(args: GetConnectionCommandInput, options?: __HttpHandlerOptions): Promise<GetConnectionCommandOutput>;
  getConnection(args: GetConnectionCommandInput, cb: (err: any, data?: GetConnectionCommandOutput) => void): void;
  getConnection(
    args: GetConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOrderCommand}
   */
  getOrder(args: GetOrderCommandInput, options?: __HttpHandlerOptions): Promise<GetOrderCommandOutput>;
  getOrder(args: GetOrderCommandInput, cb: (err: any, data?: GetOrderCommandOutput) => void): void;
  getOrder(
    args: GetOrderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOrderCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOutpostCommand}
   */
  getOutpost(args: GetOutpostCommandInput, options?: __HttpHandlerOptions): Promise<GetOutpostCommandOutput>;
  getOutpost(args: GetOutpostCommandInput, cb: (err: any, data?: GetOutpostCommandOutput) => void): void;
  getOutpost(
    args: GetOutpostCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOutpostCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOutpostBillingInformationCommand}
   */
  getOutpostBillingInformation(
    args: GetOutpostBillingInformationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOutpostBillingInformationCommandOutput>;
  getOutpostBillingInformation(
    args: GetOutpostBillingInformationCommandInput,
    cb: (err: any, data?: GetOutpostBillingInformationCommandOutput) => void
  ): void;
  getOutpostBillingInformation(
    args: GetOutpostBillingInformationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOutpostBillingInformationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOutpostInstanceTypesCommand}
   */
  getOutpostInstanceTypes(
    args: GetOutpostInstanceTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOutpostInstanceTypesCommandOutput>;
  getOutpostInstanceTypes(
    args: GetOutpostInstanceTypesCommandInput,
    cb: (err: any, data?: GetOutpostInstanceTypesCommandOutput) => void
  ): void;
  getOutpostInstanceTypes(
    args: GetOutpostInstanceTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOutpostInstanceTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOutpostSupportedInstanceTypesCommand}
   */
  getOutpostSupportedInstanceTypes(
    args: GetOutpostSupportedInstanceTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOutpostSupportedInstanceTypesCommandOutput>;
  getOutpostSupportedInstanceTypes(
    args: GetOutpostSupportedInstanceTypesCommandInput,
    cb: (err: any, data?: GetOutpostSupportedInstanceTypesCommandOutput) => void
  ): void;
  getOutpostSupportedInstanceTypes(
    args: GetOutpostSupportedInstanceTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOutpostSupportedInstanceTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSiteCommand}
   */
  getSite(args: GetSiteCommandInput, options?: __HttpHandlerOptions): Promise<GetSiteCommandOutput>;
  getSite(args: GetSiteCommandInput, cb: (err: any, data?: GetSiteCommandOutput) => void): void;
  getSite(
    args: GetSiteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSiteCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSiteAddressCommand}
   */
  getSiteAddress(
    args: GetSiteAddressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSiteAddressCommandOutput>;
  getSiteAddress(args: GetSiteAddressCommandInput, cb: (err: any, data?: GetSiteAddressCommandOutput) => void): void;
  getSiteAddress(
    args: GetSiteAddressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSiteAddressCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAssetInstancesCommand}
   */
  listAssetInstances(
    args: ListAssetInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssetInstancesCommandOutput>;
  listAssetInstances(
    args: ListAssetInstancesCommandInput,
    cb: (err: any, data?: ListAssetInstancesCommandOutput) => void
  ): void;
  listAssetInstances(
    args: ListAssetInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssetInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAssetsCommand}
   */
  listAssets(args: ListAssetsCommandInput, options?: __HttpHandlerOptions): Promise<ListAssetsCommandOutput>;
  listAssets(args: ListAssetsCommandInput, cb: (err: any, data?: ListAssetsCommandOutput) => void): void;
  listAssets(
    args: ListAssetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBlockingInstancesForCapacityTaskCommand}
   */
  listBlockingInstancesForCapacityTask(
    args: ListBlockingInstancesForCapacityTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBlockingInstancesForCapacityTaskCommandOutput>;
  listBlockingInstancesForCapacityTask(
    args: ListBlockingInstancesForCapacityTaskCommandInput,
    cb: (err: any, data?: ListBlockingInstancesForCapacityTaskCommandOutput) => void
  ): void;
  listBlockingInstancesForCapacityTask(
    args: ListBlockingInstancesForCapacityTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBlockingInstancesForCapacityTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCapacityTasksCommand}
   */
  listCapacityTasks(): Promise<ListCapacityTasksCommandOutput>;
  listCapacityTasks(
    args: ListCapacityTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCapacityTasksCommandOutput>;
  listCapacityTasks(
    args: ListCapacityTasksCommandInput,
    cb: (err: any, data?: ListCapacityTasksCommandOutput) => void
  ): void;
  listCapacityTasks(
    args: ListCapacityTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCapacityTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCatalogItemsCommand}
   */
  listCatalogItems(): Promise<ListCatalogItemsCommandOutput>;
  listCatalogItems(
    args: ListCatalogItemsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCatalogItemsCommandOutput>;
  listCatalogItems(
    args: ListCatalogItemsCommandInput,
    cb: (err: any, data?: ListCatalogItemsCommandOutput) => void
  ): void;
  listCatalogItems(
    args: ListCatalogItemsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCatalogItemsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOrdersCommand}
   */
  listOrders(): Promise<ListOrdersCommandOutput>;
  listOrders(args: ListOrdersCommandInput, options?: __HttpHandlerOptions): Promise<ListOrdersCommandOutput>;
  listOrders(args: ListOrdersCommandInput, cb: (err: any, data?: ListOrdersCommandOutput) => void): void;
  listOrders(
    args: ListOrdersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOrdersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOutpostsCommand}
   */
  listOutposts(): Promise<ListOutpostsCommandOutput>;
  listOutposts(args: ListOutpostsCommandInput, options?: __HttpHandlerOptions): Promise<ListOutpostsCommandOutput>;
  listOutposts(args: ListOutpostsCommandInput, cb: (err: any, data?: ListOutpostsCommandOutput) => void): void;
  listOutposts(
    args: ListOutpostsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOutpostsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSitesCommand}
   */
  listSites(): Promise<ListSitesCommandOutput>;
  listSites(args: ListSitesCommandInput, options?: __HttpHandlerOptions): Promise<ListSitesCommandOutput>;
  listSites(args: ListSitesCommandInput, cb: (err: any, data?: ListSitesCommandOutput) => void): void;
  listSites(
    args: ListSitesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSitesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link StartCapacityTaskCommand}
   */
  startCapacityTask(
    args: StartCapacityTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartCapacityTaskCommandOutput>;
  startCapacityTask(
    args: StartCapacityTaskCommandInput,
    cb: (err: any, data?: StartCapacityTaskCommandOutput) => void
  ): void;
  startCapacityTask(
    args: StartCapacityTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartCapacityTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link StartConnectionCommand}
   */
  startConnection(
    args: StartConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartConnectionCommandOutput>;
  startConnection(args: StartConnectionCommandInput, cb: (err: any, data?: StartConnectionCommandOutput) => void): void;
  startConnection(
    args: StartConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateOutpostCommand}
   */
  updateOutpost(args: UpdateOutpostCommandInput, options?: __HttpHandlerOptions): Promise<UpdateOutpostCommandOutput>;
  updateOutpost(args: UpdateOutpostCommandInput, cb: (err: any, data?: UpdateOutpostCommandOutput) => void): void;
  updateOutpost(
    args: UpdateOutpostCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateOutpostCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSiteCommand}
   */
  updateSite(args: UpdateSiteCommandInput, options?: __HttpHandlerOptions): Promise<UpdateSiteCommandOutput>;
  updateSite(args: UpdateSiteCommandInput, cb: (err: any, data?: UpdateSiteCommandOutput) => void): void;
  updateSite(
    args: UpdateSiteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSiteCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSiteAddressCommand}
   */
  updateSiteAddress(
    args: UpdateSiteAddressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSiteAddressCommandOutput>;
  updateSiteAddress(
    args: UpdateSiteAddressCommandInput,
    cb: (err: any, data?: UpdateSiteAddressCommandOutput) => void
  ): void;
  updateSiteAddress(
    args: UpdateSiteAddressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSiteAddressCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSiteRackPhysicalPropertiesCommand}
   */
  updateSiteRackPhysicalProperties(
    args: UpdateSiteRackPhysicalPropertiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSiteRackPhysicalPropertiesCommandOutput>;
  updateSiteRackPhysicalProperties(
    args: UpdateSiteRackPhysicalPropertiesCommandInput,
    cb: (err: any, data?: UpdateSiteRackPhysicalPropertiesCommandOutput) => void
  ): void;
  updateSiteRackPhysicalProperties(
    args: UpdateSiteRackPhysicalPropertiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSiteRackPhysicalPropertiesCommandOutput) => void
  ): void;
}

/**
 * <p>Amazon Web Services Outposts is a fully managed service that extends Amazon Web Services infrastructure, APIs, and tools to
 *       customer premises. By providing local access to Amazon Web Services managed infrastructure, Amazon Web Services Outposts enables
 *       customers to build and run applications on premises using the same programming interfaces as
 *       in Amazon Web Services Regions, while using local compute and storage resources for lower latency and local
 *       data processing needs.</p>
 * @public
 */
export class Outposts extends OutpostsClient implements Outposts {}
createAggregatedClient(commands, Outposts);
