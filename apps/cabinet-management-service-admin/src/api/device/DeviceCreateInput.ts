import { ConfigurationCreateNestedManyWithoutDevicesInput } from "./ConfigurationCreateNestedManyWithoutDevicesInput";
import { FieldModelWhereUniqueInput } from "../fieldModel/FieldModelWhereUniqueInput";
import { SensorCreateNestedManyWithoutDevicesInput } from "./SensorCreateNestedManyWithoutDevicesInput";

export type DeviceCreateInput = {
  configurations?: ConfigurationCreateNestedManyWithoutDevicesInput;
  fieldField?: FieldModelWhereUniqueInput | null;
  name?: string | null;
  sensors?: SensorCreateNestedManyWithoutDevicesInput;
};
