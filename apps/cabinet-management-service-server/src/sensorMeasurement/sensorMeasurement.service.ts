import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SensorMeasurementServiceBase } from "./base/sensorMeasurement.service.base";

@Injectable()
export class SensorMeasurementService extends SensorMeasurementServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
