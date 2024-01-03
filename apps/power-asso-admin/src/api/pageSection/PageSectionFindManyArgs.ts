import { PageSectionWhereInput } from "./PageSectionWhereInput";
import { PageSectionOrderByInput } from "./PageSectionOrderByInput";

export type PageSectionFindManyArgs = {
  where?: PageSectionWhereInput;
  orderBy?: Array<PageSectionOrderByInput>;
  skip?: number;
  take?: number;
};
