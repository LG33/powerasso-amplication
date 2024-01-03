import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PageSectionService } from "./pageSection.service";
import { PageSectionControllerBase } from "./base/pageSection.controller.base";

@swagger.ApiTags("pageSections")
@common.Controller("pageSections")
export class PageSectionController extends PageSectionControllerBase {
  constructor(
    protected readonly service: PageSectionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
