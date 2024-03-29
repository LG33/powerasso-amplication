/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Page, // @ts-ignore
  PageSection, // @ts-ignore
  Website,
} from "@prisma/client";

export class PageServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.PageCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.PageCountArgs>
  ): Promise<number> {
    return this.prisma.page.count(args);
  }

  async pages<T extends Prisma.PageFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PageFindManyArgs>
  ): Promise<Page[]> {
    return this.prisma.page.findMany(args);
  }
  async page<T extends Prisma.PageFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PageFindUniqueArgs>
  ): Promise<Page | null> {
    return this.prisma.page.findUnique(args);
  }
  async createPage<T extends Prisma.PageCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PageCreateArgs>
  ): Promise<Page> {
    return this.prisma.page.create<T>(args);
  }
  async updatePage<T extends Prisma.PageUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PageUpdateArgs>
  ): Promise<Page> {
    return this.prisma.page.update<T>(args);
  }
  async deletePage<T extends Prisma.PageDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PageDeleteArgs>
  ): Promise<Page> {
    return this.prisma.page.delete(args);
  }

  async findSections(
    parentId: string,
    args: Prisma.PageSectionFindManyArgs
  ): Promise<PageSection[]> {
    return this.prisma.page
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .sections(args);
  }

  async getWebsite(parentId: string): Promise<Website | null> {
    return this.prisma.page
      .findUnique({
        where: { id: parentId },
      })
      .website();
  }
}
