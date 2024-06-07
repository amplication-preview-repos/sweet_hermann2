import { DeviceWhereUniqueInput } from "../device/DeviceWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type ConfigurationUpdateInput = {
  device?: DeviceWhereUniqueInput | null;
  parameters?: InputJsonValue;
};
