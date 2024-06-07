import { SensorMeasurementWhereInput } from "./SensorMeasurementWhereInput";
import { SensorMeasurementOrderByInput } from "./SensorMeasurementOrderByInput";

export type SensorMeasurementFindManyArgs = {
  where?: SensorMeasurementWhereInput;
  orderBy?: Array<SensorMeasurementOrderByInput>;
  skip?: number;
  take?: number;
};
