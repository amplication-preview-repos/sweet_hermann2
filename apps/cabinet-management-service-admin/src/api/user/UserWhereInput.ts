import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FarmListRelationFilter } from "../farm/FarmListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  farms?: FarmListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  name?: StringNullableFilter;
  username?: StringFilter;
};
