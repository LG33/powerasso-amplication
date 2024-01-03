import { Organization } from "../organization/Organization";
import { Page } from "../page/Page";

export type Website = {
  createdAt: Date;
  id: string;
  organization?: Organization | null;
  pages?: Array<Page>;
  updatedAt: Date;
};
