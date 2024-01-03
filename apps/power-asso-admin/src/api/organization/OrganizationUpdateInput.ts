import { UserUpdateManyWithoutOrganizationsInput } from "./UserUpdateManyWithoutOrganizationsInput";
import { WebsiteUpdateManyWithoutOrganizationsInput } from "./WebsiteUpdateManyWithoutOrganizationsInput";

export type OrganizationUpdateInput = {
  name?: string | null;
  users?: UserUpdateManyWithoutOrganizationsInput;
  websites?: WebsiteUpdateManyWithoutOrganizationsInput;
};
