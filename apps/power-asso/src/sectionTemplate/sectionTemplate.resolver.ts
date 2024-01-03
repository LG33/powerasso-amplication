import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SectionTemplateResolverBase } from "./base/sectionTemplate.resolver.base";
import { SectionTemplate } from "./base/SectionTemplate";
import { SectionTemplateService } from "./sectionTemplate.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SectionTemplate)
export class SectionTemplateResolver extends SectionTemplateResolverBase {
  constructor(
    protected readonly service: SectionTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
