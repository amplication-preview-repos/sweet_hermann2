import { GreenhouseUpdateManyWithoutFarmsInput } from "./GreenhouseUpdateManyWithoutFarmsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FarmUpdateInput = {
  greenhouses?: GreenhouseUpdateManyWithoutFarmsInput;
  name?: string | null;
  user?: UserWhereUniqueInput | null;
};
