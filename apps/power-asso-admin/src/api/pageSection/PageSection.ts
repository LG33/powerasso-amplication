import { Page } from "../page/Page";
import { SectionTemplate } from "../sectionTemplate/SectionTemplate";

export type PageSection = {
  createdAt: Date;
  id: string;
  page?: Page | null;
  Template?: SectionTemplate | null;
  updatedAt: Date;
};
