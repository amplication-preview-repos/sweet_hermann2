import { FarmWhereUniqueInput } from "../farm/FarmWhereUniqueInput";
import { FieldModelCreateNestedManyWithoutGreenhousesInput } from "./FieldModelCreateNestedManyWithoutGreenhousesInput";

export type GreenhouseCreateInput = {
  farm?: FarmWhereUniqueInput | null;
  fields?: FieldModelCreateNestedManyWithoutGreenhousesInput;
  name?: string | null;
};
