import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { PAGE_TITLE_FIELD } from "./PageTitle";
import { SECTIONTEMPLATE_TITLE_FIELD } from "../sectionTemplate/SectionTemplateTitle";
import { WEBSITE_TITLE_FIELD } from "../website/WebsiteTitle";

export const PageShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="Website" source="website.id" reference="Website">
          <TextField source={WEBSITE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="PageSection"
          target="pageId"
          label="Sections"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
