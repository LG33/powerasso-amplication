import { StringFilter } from "../../util/StringFilter";
import { PageSectionListRelationFilter } from "../pageSection/PageSectionListRelationFilter";
import { WebsiteWhereUniqueInput } from "../website/WebsiteWhereUniqueInput";

export type PageWhereInput = {
  id?: StringFilter;
  sections?: PageSectionListRelationFilter;
  website?: WebsiteWhereUniqueInput;
};
