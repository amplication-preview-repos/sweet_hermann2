import { GreenhouseCreateNestedManyWithoutFarmsInput } from "./GreenhouseCreateNestedManyWithoutFarmsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FarmCreateInput = {
  greenhouses?: GreenhouseCreateNestedManyWithoutFarmsInput;
  name?: string | null;
  user?: UserWhereUniqueInput | null;
};
