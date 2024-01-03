import { UserCreateNestedManyWithoutOrganizationsInput } from "./UserCreateNestedManyWithoutOrganizationsInput";
import { WebsiteCreateNestedManyWithoutOrganizationsInput } from "./WebsiteCreateNestedManyWithoutOrganizationsInput";

export type OrganizationCreateInput = {
  name?: string | null;
  users?: UserCreateNestedManyWithoutOrganizationsInput;
  websites?: WebsiteCreateNestedManyWithoutOrganizationsInput;
};
