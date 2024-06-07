import { Device } from "../device/Device";
import { Greenhouse } from "../greenhouse/Greenhouse";

export type FieldModel = {
  createdAt: Date;
  devices?: Array<Device>;
  greenhouse?: Greenhouse | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
