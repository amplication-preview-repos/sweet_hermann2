import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GreenhouseService } from "./greenhouse.service";
import { GreenhouseControllerBase } from "./base/greenhouse.controller.base";

@swagger.ApiTags("greenhouses")
@common.Controller("greenhouses")
export class GreenhouseController extends GreenhouseControllerBase {
  constructor(protected readonly service: GreenhouseService) {
    super(service);
  }
}
