import { DeviceUpdateManyWithoutFieldModelsInput } from "./DeviceUpdateManyWithoutFieldModelsInput";
import { GreenhouseWhereUniqueInput } from "../greenhouse/GreenhouseWhereUniqueInput";

export type FieldModelUpdateInput = {
  devices?: DeviceUpdateManyWithoutFieldModelsInput;
  greenhouse?: GreenhouseWhereUniqueInput | null;
  name?: string | null;
};
