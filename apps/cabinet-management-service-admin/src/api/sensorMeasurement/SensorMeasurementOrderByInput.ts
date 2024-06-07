import { SortOrder } from "../../util/SortOrder";

export type SensorMeasurementOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  sensorId?: SortOrder;
  timestamp?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
  value?: SortOrder;
};
