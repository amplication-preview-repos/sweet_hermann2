import { DeviceWhereUniqueInput } from "../device/DeviceWhereUniqueInput";
import { SensorMeasurementCreateNestedManyWithoutSensorsInput } from "./SensorMeasurementCreateNestedManyWithoutSensorsInput";

export type SensorCreateInput = {
  device?: DeviceWhereUniqueInput | null;
  sensorMeasurements?: SensorMeasurementCreateNestedManyWithoutSensorsInput;
  typeField?: string | null;
};
