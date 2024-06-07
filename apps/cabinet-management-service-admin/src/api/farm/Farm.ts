import { Greenhouse } from "../greenhouse/Greenhouse";
import { User } from "../user/User";

export type Farm = {
  createdAt: Date;
  greenhouses?: Array<Greenhouse>;
  id: string;
  name: string | null;
  updatedAt: Date;
  user?: User | null;
};
