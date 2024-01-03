import { StringFilter } from "../../util/StringFilter";
import { PageWhereUniqueInput } from "../page/PageWhereUniqueInput";
import { SectionTemplateWhereUniqueInput } from "../sectionTemplate/SectionTemplateWhereUniqueInput";

export type PageSectionWhereInput = {
  id?: StringFilter;
  page?: PageWhereUniqueInput;
  Template?: SectionTemplateWhereUniqueInput;
};
