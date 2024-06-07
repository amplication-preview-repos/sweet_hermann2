import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GreenhouseServiceBase } from "./base/greenhouse.service.base";

@Injectable()
export class GreenhouseService extends GreenhouseServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
