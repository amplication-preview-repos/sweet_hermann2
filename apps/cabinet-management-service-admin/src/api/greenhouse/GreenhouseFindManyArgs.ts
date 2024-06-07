import { GreenhouseWhereInput } from "./GreenhouseWhereInput";
import { GreenhouseOrderByInput } from "./GreenhouseOrderByInput";

export type GreenhouseFindManyArgs = {
  where?: GreenhouseWhereInput;
  orderBy?: Array<GreenhouseOrderByInput>;
  skip?: number;
  take?: number;
};
