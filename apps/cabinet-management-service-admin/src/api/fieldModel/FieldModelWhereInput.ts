import { DeviceListRelationFilter } from "../device/DeviceListRelationFilter";
import { GreenhouseWhereUniqueInput } from "../greenhouse/GreenhouseWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type FieldModelWhereInput = {
  devices?: DeviceListRelationFilter;
  greenhouse?: GreenhouseWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
};
