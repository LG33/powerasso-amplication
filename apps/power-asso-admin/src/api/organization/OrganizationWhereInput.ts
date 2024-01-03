import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";
import { WebsiteListRelationFilter } from "../website/WebsiteListRelationFilter";

export type OrganizationWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  users?: UserListRelationFilter;
  websites?: WebsiteListRelationFilter;
};
