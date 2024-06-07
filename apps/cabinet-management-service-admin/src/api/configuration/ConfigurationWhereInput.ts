import { DeviceWhereUniqueInput } from "../device/DeviceWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type ConfigurationWhereInput = {
  device?: DeviceWhereUniqueInput;
  id?: StringFilter;
  parameters?: JsonFilter;
};
