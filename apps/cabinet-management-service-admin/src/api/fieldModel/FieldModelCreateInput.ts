import { DeviceCreateNestedManyWithoutFieldModelsInput } from "./DeviceCreateNestedManyWithoutFieldModelsInput";
import { GreenhouseWhereUniqueInput } from "../greenhouse/GreenhouseWhereUniqueInput";

export type FieldModelCreateInput = {
  devices?: DeviceCreateNestedManyWithoutFieldModelsInput;
  greenhouse?: GreenhouseWhereUniqueInput | null;
  name?: string | null;
};
