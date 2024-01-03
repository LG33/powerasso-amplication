import { PageSection } from "../pageSection/PageSection";

export type SectionTemplate = {
  createdAt: Date;
  id: string;
  sections?: Array<PageSection>;
  updatedAt: Date;
};
