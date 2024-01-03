import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PageSectionServiceBase } from "./base/pageSection.service.base";

@Injectable()
export class PageSectionService extends PageSectionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
