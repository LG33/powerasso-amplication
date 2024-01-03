import { PageSectionCreateNestedManyWithoutPagesInput } from "./PageSectionCreateNestedManyWithoutPagesInput";
import { WebsiteWhereUniqueInput } from "../website/WebsiteWhereUniqueInput";

export type PageCreateInput = {
  sections?: PageSectionCreateNestedManyWithoutPagesInput;
  website?: WebsiteWhereUniqueInput | null;
};
