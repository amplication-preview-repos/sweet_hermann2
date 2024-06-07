import { DeviceWhereUniqueInput } from "../device/DeviceWhereUniqueInput";
import { SensorMeasurementUpdateManyWithoutSensorsInput } from "./SensorMeasurementUpdateManyWithoutSensorsInput";

export type SensorUpdateInput = {
  device?: DeviceWhereUniqueInput | null;
  sensorMeasurements?: SensorMeasurementUpdateManyWithoutSensorsInput;
  typeField?: string | null;
};
