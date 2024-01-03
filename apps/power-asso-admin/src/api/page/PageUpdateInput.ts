import { PageSectionUpdateManyWithoutPagesInput } from "./PageSectionUpdateManyWithoutPagesInput";
import { WebsiteWhereUniqueInput } from "../website/WebsiteWhereUniqueInput";

export type PageUpdateInput = {
  sections?: PageSectionUpdateManyWithoutPagesInput;
  website?: WebsiteWhereUniqueInput | null;
};
