import { FarmUpdateManyWithoutUsersInput } from "./FarmUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  farms?: FarmUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  name?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
