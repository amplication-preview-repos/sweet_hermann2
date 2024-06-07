import { SensorMeasurement as TSensorMeasurement } from "../api/sensorMeasurement/SensorMeasurement";

export const SENSORMEASUREMENT_TITLE_FIELD = "typeField";

export const SensorMeasurementTitle = (record: TSensorMeasurement): string => {
  return record.typeField?.toString() || String(record.id);
};
