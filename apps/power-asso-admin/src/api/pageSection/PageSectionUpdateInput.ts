import { PageWhereUniqueInput } from "../page/PageWhereUniqueInput";
import { SectionTemplateWhereUniqueInput } from "../sectionTemplate/SectionTemplateWhereUniqueInput";

export type PageSectionUpdateInput = {
  page?: PageWhereUniqueInput | null;
  Template?: SectionTemplateWhereUniqueInput | null;
};
