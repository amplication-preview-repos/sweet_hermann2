import { Sensor } from "../sensor/Sensor";

export type SensorMeasurement = {
  createdAt: Date;
  id: string;
  sensor?: Sensor | null;
  timestamp: Date | null;
  typeField: string | null;
  updatedAt: Date;
  value: number | null;
};
