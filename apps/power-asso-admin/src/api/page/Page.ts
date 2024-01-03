import { PageSection } from "../pageSection/PageSection";
import { Website } from "../website/Website";

export type Page = {
  createdAt: Date;
  id: string;
  sections?: Array<PageSection>;
  updatedAt: Date;
  website?: Website | null;
};
