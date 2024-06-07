import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SensorMeasurementService } from "./sensorMeasurement.service";
import { SensorMeasurementControllerBase } from "./base/sensorMeasurement.controller.base";

@swagger.ApiTags("sensorMeasurements")
@common.Controller("sensorMeasurements")
export class SensorMeasurementController extends SensorMeasurementControllerBase {
  constructor(protected readonly service: SensorMeasurementService) {
    super(service);
  }
}
