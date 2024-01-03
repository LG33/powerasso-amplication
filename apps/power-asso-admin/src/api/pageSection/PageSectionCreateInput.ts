import { PageWhereUniqueInput } from "../page/PageWhereUniqueInput";
import { SectionTemplateWhereUniqueInput } from "../sectionTemplate/SectionTemplateWhereUniqueInput";

export type PageSectionCreateInput = {
  page?: PageWhereUniqueInput | null;
  Template?: SectionTemplateWhereUniqueInput | null;
};
