import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FarmServiceBase } from "./base/farm.service.base";

@Injectable()
export class FarmService extends FarmServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
