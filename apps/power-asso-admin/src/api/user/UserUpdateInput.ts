import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  organization?: OrganizationWhereUniqueInput | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
