import { SectionTemplateWhereInput } from "./SectionTemplateWhereInput";
import { SectionTemplateOrderByInput } from "./SectionTemplateOrderByInput";

export type SectionTemplateFindManyArgs = {
  where?: SectionTemplateWhereInput;
  orderBy?: Array<SectionTemplateOrderByInput>;
  skip?: number;
  take?: number;
};
