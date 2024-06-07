import { Device } from "../device/Device";
import { JsonValue } from "type-fest";

export type Configuration = {
  createdAt: Date;
  device?: Device | null;
  id: string;
  parameters: JsonValue;
  updatedAt: Date;
};
