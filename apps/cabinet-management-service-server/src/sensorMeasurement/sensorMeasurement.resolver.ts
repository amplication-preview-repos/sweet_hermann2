import * as graphql from "@nestjs/graphql";
import { SensorMeasurementResolverBase } from "./base/sensorMeasurement.resolver.base";
import { SensorMeasurement } from "./base/SensorMeasurement";
import { SensorMeasurementService } from "./sensorMeasurement.service";

@graphql.Resolver(() => SensorMeasurement)
export class SensorMeasurementResolver extends SensorMeasurementResolverBase {
  constructor(protected readonly service: SensorMeasurementService) {
    super(service);
  }
}
