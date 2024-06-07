import { Module } from "@nestjs/common";
import { SensorMeasurementModuleBase } from "./base/sensorMeasurement.module.base";
import { SensorMeasurementService } from "./sensorMeasurement.service";
import { SensorMeasurementController } from "./sensorMeasurement.controller";
import { SensorMeasurementResolver } from "./sensorMeasurement.resolver";

@Module({
  imports: [SensorMeasurementModuleBase],
  controllers: [SensorMeasurementController],
  providers: [SensorMeasurementService, SensorMeasurementResolver],
  exports: [SensorMeasurementService],
})
export class SensorMeasurementModule {}
