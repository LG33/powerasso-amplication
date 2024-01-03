import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  organization?: OrganizationWhereUniqueInput;
  username?: StringFilter;
};
