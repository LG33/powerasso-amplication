import { StringFilter } from "../../util/StringFilter";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { PageListRelationFilter } from "../page/PageListRelationFilter";

export type WebsiteWhereInput = {
  id?: StringFilter;
  organization?: OrganizationWhereUniqueInput;
  pages?: PageListRelationFilter;
};
