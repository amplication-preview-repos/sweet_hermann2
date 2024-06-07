import { DeviceWhereUniqueInput } from "../device/DeviceWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type ConfigurationCreateInput = {
  device?: DeviceWhereUniqueInput | null;
  parameters?: InputJsonValue;
};
