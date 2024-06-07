import { Farm } from "../farm/Farm";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  farms?: Array<Farm>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  name: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
