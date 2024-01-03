import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { PAGE_TITLE_FIELD } from "../page/PageTitle";
import { SECTIONTEMPLATE_TITLE_FIELD } from "../sectionTemplate/SectionTemplateTitle";

export const PageSectionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Page" source="page.id" reference="Page">
          <TextField source={PAGE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Template"
          source="sectiontemplate.id"
          reference="SectionTemplate"
        >
          <TextField source={SECTIONTEMPLATE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
