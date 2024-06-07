import * as graphql from "@nestjs/graphql";
import { GreenhouseResolverBase } from "./base/greenhouse.resolver.base";
import { Greenhouse } from "./base/Greenhouse";
import { GreenhouseService } from "./greenhouse.service";

@graphql.Resolver(() => Greenhouse)
export class GreenhouseResolver extends GreenhouseResolverBase {
  constructor(protected readonly service: GreenhouseService) {
    super(service);
  }
}
