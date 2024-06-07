import { FarmWhereUniqueInput } from "../farm/FarmWhereUniqueInput";
import { FieldModelUpdateManyWithoutGreenhousesInput } from "./FieldModelUpdateManyWithoutGreenhousesInput";

export type GreenhouseUpdateInput = {
  farm?: FarmWhereUniqueInput | null;
  fields?: FieldModelUpdateManyWithoutGreenhousesInput;
  name?: string | null;
};
