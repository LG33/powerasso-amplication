import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PageSectionModuleBase } from "./base/pageSection.module.base";
import { PageSectionService } from "./pageSection.service";
import { PageSectionController } from "./pageSection.controller";
import { PageSectionResolver } from "./pageSection.resolver";

@Module({
  imports: [PageSectionModuleBase, forwardRef(() => AuthModule)],
  controllers: [PageSectionController],
  providers: [PageSectionService, PageSectionResolver],
  exports: [PageSectionService],
})
export class PageSectionModule {}
