import { PageSection as TPageSection } from "../api/pageSection/PageSection";

export const PAGESECTION_TITLE_FIELD = "id";

export const PageSectionTitle = (record: TPageSection): string => {
  return record.id?.toString() || String(record.id);
};
