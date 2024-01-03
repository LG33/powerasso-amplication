/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { SectionTemplateService } from "../sectionTemplate.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { SectionTemplateCreateInput } from "./SectionTemplateCreateInput";
import { SectionTemplate } from "./SectionTemplate";
import { SectionTemplateFindManyArgs } from "./SectionTemplateFindManyArgs";
import { SectionTemplateWhereUniqueInput } from "./SectionTemplateWhereUniqueInput";
import { SectionTemplateUpdateInput } from "./SectionTemplateUpdateInput";
import { PageSectionFindManyArgs } from "../../pageSection/base/PageSectionFindManyArgs";
import { PageSection } from "../../pageSection/base/PageSection";
import { PageSectionWhereUniqueInput } from "../../pageSection/base/PageSectionWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class SectionTemplateControllerBase {
  constructor(
    protected readonly service: SectionTemplateService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SectionTemplate })
  @nestAccessControl.UseRoles({
    resource: "SectionTemplate",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createSectionTemplate(
    @common.Body() data: SectionTemplateCreateInput
  ): Promise<SectionTemplate> {
    return await this.service.createSectionTemplate({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [SectionTemplate] })
  @ApiNestedQuery(SectionTemplateFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "SectionTemplate",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async sectionTemplates(
    @common.Req() request: Request
  ): Promise<SectionTemplate[]> {
    const args = plainToClass(SectionTemplateFindManyArgs, request.query);
    return this.service.sectionTemplates({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SectionTemplate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SectionTemplate",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async sectionTemplate(
    @common.Param() params: SectionTemplateWhereUniqueInput
  ): Promise<SectionTemplate | null> {
    const result = await this.service.sectionTemplate({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: SectionTemplate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SectionTemplate",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateSectionTemplate(
    @common.Param() params: SectionTemplateWhereUniqueInput,
    @common.Body() data: SectionTemplateUpdateInput
  ): Promise<SectionTemplate | null> {
    try {
      return await this.service.updateSectionTemplate({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: SectionTemplate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SectionTemplate",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteSectionTemplate(
    @common.Param() params: SectionTemplateWhereUniqueInput
  ): Promise<SectionTemplate | null> {
    try {
      return await this.service.deleteSectionTemplate({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/sections")
  @ApiNestedQuery(PageSectionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "PageSection",
    action: "read",
    possession: "any",
  })
  async findSections(
    @common.Req() request: Request,
    @common.Param() params: SectionTemplateWhereUniqueInput
  ): Promise<PageSection[]> {
    const query = plainToClass(PageSectionFindManyArgs, request.query);
    const results = await this.service.findSections(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        page: {
          select: {
            id: true,
          },
        },

        Template: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/sections")
  @nestAccessControl.UseRoles({
    resource: "SectionTemplate",
    action: "update",
    possession: "any",
  })
  async connectSections(
    @common.Param() params: SectionTemplateWhereUniqueInput,
    @common.Body() body: PageSectionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      sections: {
        connect: body,
      },
    };
    await this.service.updateSectionTemplate({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/sections")
  @nestAccessControl.UseRoles({
    resource: "SectionTemplate",
    action: "update",
    possession: "any",
  })
  async updateSections(
    @common.Param() params: SectionTemplateWhereUniqueInput,
    @common.Body() body: PageSectionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      sections: {
        set: body,
      },
    };
    await this.service.updateSectionTemplate({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/sections")
  @nestAccessControl.UseRoles({
    resource: "SectionTemplate",
    action: "update",
    possession: "any",
  })
  async disconnectSections(
    @common.Param() params: SectionTemplateWhereUniqueInput,
    @common.Body() body: PageSectionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      sections: {
        disconnect: body,
      },
    };
    await this.service.updateSectionTemplate({
      where: params,
      data,
      select: { id: true },
    });
  }
}
