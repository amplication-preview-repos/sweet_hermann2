import { Sensor as TSensor } from "../api/sensor/Sensor";

export const SENSOR_TITLE_FIELD = "typeField";

export const SensorTitle = (record: TSensor): string => {
  return record.typeField?.toString() || String(record.id);
};
