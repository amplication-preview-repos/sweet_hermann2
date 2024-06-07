import { Module } from "@nestjs/common";
import { GreenhouseModuleBase } from "./base/greenhouse.module.base";
import { GreenhouseService } from "./greenhouse.service";
import { GreenhouseController } from "./greenhouse.controller";
import { GreenhouseResolver } from "./greenhouse.resolver";

@Module({
  imports: [GreenhouseModuleBase],
  controllers: [GreenhouseController],
  providers: [GreenhouseService, GreenhouseResolver],
  exports: [GreenhouseService],
})
export class GreenhouseModule {}
