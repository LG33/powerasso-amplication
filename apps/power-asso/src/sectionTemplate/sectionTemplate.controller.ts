import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SectionTemplateService } from "./sectionTemplate.service";
import { SectionTemplateControllerBase } from "./base/sectionTemplate.controller.base";

@swagger.ApiTags("sectionTemplates")
@common.Controller("sectionTemplates")
export class SectionTemplateController extends SectionTemplateControllerBase {
  constructor(
    protected readonly service: SectionTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
