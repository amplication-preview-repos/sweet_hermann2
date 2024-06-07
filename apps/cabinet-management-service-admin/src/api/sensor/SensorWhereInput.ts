import { DeviceWhereUniqueInput } from "../device/DeviceWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { SensorMeasurementListRelationFilter } from "../sensorMeasurement/SensorMeasurementListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SensorWhereInput = {
  device?: DeviceWhereUniqueInput;
  id?: StringFilter;
  sensorMeasurements?: SensorMeasurementListRelationFilter;
  typeField?: StringNullableFilter;
};
