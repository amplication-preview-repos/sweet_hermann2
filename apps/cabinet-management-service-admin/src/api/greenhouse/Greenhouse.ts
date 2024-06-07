import { Farm } from "../farm/Farm";
import { FieldModel } from "../fieldModel/FieldModel";

export type Greenhouse = {
  createdAt: Date;
  farm?: Farm | null;
  fields?: Array<FieldModel>;
  id: string;
  name: string | null;
  updatedAt: Date;
};
