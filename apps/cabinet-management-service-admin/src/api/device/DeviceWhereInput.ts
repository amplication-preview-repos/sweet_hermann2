import { ConfigurationListRelationFilter } from "../configuration/ConfigurationListRelationFilter";
import { FieldModelWhereUniqueInput } from "../fieldModel/FieldModelWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SensorListRelationFilter } from "../sensor/SensorListRelationFilter";

export type DeviceWhereInput = {
  configurations?: ConfigurationListRelationFilter;
  fieldField?: FieldModelWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
  sensors?: SensorListRelationFilter;
};
