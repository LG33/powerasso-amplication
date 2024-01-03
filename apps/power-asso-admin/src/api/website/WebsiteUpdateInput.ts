import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { PageUpdateManyWithoutWebsitesInput } from "./PageUpdateManyWithoutWebsitesInput";

export type WebsiteUpdateInput = {
  organization?: OrganizationWhereUniqueInput | null;
  pages?: PageUpdateManyWithoutWebsitesInput;
};
