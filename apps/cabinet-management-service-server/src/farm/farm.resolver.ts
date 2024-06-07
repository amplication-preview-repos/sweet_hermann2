import * as graphql from "@nestjs/graphql";
import { FarmResolverBase } from "./base/farm.resolver.base";
import { Farm } from "./base/Farm";
import { FarmService } from "./farm.service";

@graphql.Resolver(() => Farm)
export class FarmResolver extends FarmResolverBase {
  constructor(protected readonly service: FarmService) {
    super(service);
  }
}
