import { ConfigurationWhereUniqueInput } from "../configuration/ConfigurationWhereUniqueInput";

export type ConfigurationUpdateManyWithoutDevicesInput = {
  connect?: Array<ConfigurationWhereUniqueInput>;
  disconnect?: Array<ConfigurationWhereUniqueInput>;
  set?: Array<ConfigurationWhereUniqueInput>;
};
