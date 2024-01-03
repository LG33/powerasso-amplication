import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SectionTemplateModuleBase } from "./base/sectionTemplate.module.base";
import { SectionTemplateService } from "./sectionTemplate.service";
import { SectionTemplateController } from "./sectionTemplate.controller";
import { SectionTemplateResolver } from "./sectionTemplate.resolver";

@Module({
  imports: [SectionTemplateModuleBase, forwardRef(() => AuthModule)],
  controllers: [SectionTemplateController],
  providers: [SectionTemplateService, SectionTemplateResolver],
  exports: [SectionTemplateService],
})
export class SectionTemplateModule {}
