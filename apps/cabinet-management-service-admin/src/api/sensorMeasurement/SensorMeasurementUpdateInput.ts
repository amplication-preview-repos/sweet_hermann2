import { SensorWhereUniqueInput } from "../sensor/SensorWhereUniqueInput";

export type SensorMeasurementUpdateInput = {
  sensor?: SensorWhereUniqueInput | null;
  timestamp?: Date | null;
  typeField?: string | null;
  value?: number | null;
};
