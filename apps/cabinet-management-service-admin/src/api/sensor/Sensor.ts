import { Device } from "../device/Device";
import { SensorMeasurement } from "../sensorMeasurement/SensorMeasurement";

export type Sensor = {
  createdAt: Date;
  device?: Device | null;
  id: string;
  sensorMeasurements?: Array<SensorMeasurement>;
  typeField: string | null;
  updatedAt: Date;
};
