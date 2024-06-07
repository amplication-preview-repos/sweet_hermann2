import { SensorWhereUniqueInput } from "../sensor/SensorWhereUniqueInput";

export type SensorMeasurementCreateInput = {
  sensor?: SensorWhereUniqueInput | null;
  timestamp?: Date | null;
  typeField?: string | null;
  value?: number | null;
};
