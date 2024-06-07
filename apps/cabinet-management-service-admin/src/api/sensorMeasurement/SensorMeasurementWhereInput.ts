import { StringFilter } from "../../util/StringFilter";
import { SensorWhereUniqueInput } from "../sensor/SensorWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type SensorMeasurementWhereInput = {
  id?: StringFilter;
  sensor?: SensorWhereUniqueInput;
  timestamp?: DateTimeNullableFilter;
  typeField?: StringNullableFilter;
  value?: FloatNullableFilter;
};
