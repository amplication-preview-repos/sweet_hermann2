import { FarmWhereUniqueInput } from "../farm/FarmWhereUniqueInput";
import { FieldModelListRelationFilter } from "../fieldModel/FieldModelListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type GreenhouseWhereInput = {
  farm?: FarmWhereUniqueInput;
  fields?: FieldModelListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
