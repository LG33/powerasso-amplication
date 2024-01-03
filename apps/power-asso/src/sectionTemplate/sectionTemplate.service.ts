import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SectionTemplateServiceBase } from "./base/sectionTemplate.service.base";

@Injectable()
export class SectionTemplateService extends SectionTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
