import { FarmCreateNestedManyWithoutUsersInput } from "./FarmCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  farms?: FarmCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  name?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
