import { Configuration } from "../configuration/Configuration";
import { FieldModel } from "../fieldModel/FieldModel";
import { Sensor } from "../sensor/Sensor";

export type Device = {
  configurations?: Array<Configuration>;
  createdAt: Date;
  fieldField?: FieldModel | null;
  id: string;
  name: string | null;
  sensors?: Array<Sensor>;
  updatedAt: Date;
};
