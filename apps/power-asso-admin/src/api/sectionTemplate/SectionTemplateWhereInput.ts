import { StringFilter } from "../../util/StringFilter";
import { PageSectionListRelationFilter } from "../pageSection/PageSectionListRelationFilter";

export type SectionTemplateWhereInput = {
  id?: StringFilter;
  sections?: PageSectionListRelationFilter;
};
