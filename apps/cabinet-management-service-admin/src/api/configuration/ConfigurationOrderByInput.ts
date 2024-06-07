import { SortOrder } from "../../util/SortOrder";

export type ConfigurationOrderByInput = {
  createdAt?: SortOrder;
  deviceId?: SortOrder;
  id?: SortOrder;
  parameters?: SortOrder;
  updatedAt?: SortOrder;
};
