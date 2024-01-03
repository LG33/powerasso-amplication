import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { PageCreateNestedManyWithoutWebsitesInput } from "./PageCreateNestedManyWithoutWebsitesInput";

export type WebsiteCreateInput = {
  organization?: OrganizationWhereUniqueInput | null;
  pages?: PageCreateNestedManyWithoutWebsitesInput;
};
