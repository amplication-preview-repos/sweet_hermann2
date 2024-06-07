import { ConfigurationUpdateManyWithoutDevicesInput } from "./ConfigurationUpdateManyWithoutDevicesInput";
import { FieldModelWhereUniqueInput } from "../fieldModel/FieldModelWhereUniqueInput";
import { SensorUpdateManyWithoutDevicesInput } from "./SensorUpdateManyWithoutDevicesInput";

export type DeviceUpdateInput = {
  configurations?: ConfigurationUpdateManyWithoutDevicesInput;
  fieldField?: FieldModelWhereUniqueInput | null;
  name?: string | null;
  sensors?: SensorUpdateManyWithoutDevicesInput;
};
