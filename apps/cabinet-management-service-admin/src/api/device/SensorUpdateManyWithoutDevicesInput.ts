import { SensorWhereUniqueInput } from "../sensor/SensorWhereUniqueInput";

export type SensorUpdateManyWithoutDevicesInput = {
  connect?: Array<SensorWhereUniqueInput>;
  disconnect?: Array<SensorWhereUniqueInput>;
  set?: Array<SensorWhereUniqueInput>;
};
