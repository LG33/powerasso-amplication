import { SectionTemplate as TSectionTemplate } from "../api/sectionTemplate/SectionTemplate";

export const SECTIONTEMPLATE_TITLE_FIELD = "id";

export const SectionTemplateTitle = (record: TSectionTemplate): string => {
  return record.id?.toString() || String(record.id);
};
