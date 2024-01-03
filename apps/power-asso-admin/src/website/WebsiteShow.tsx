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

import { WEBSITE_TITLE_FIELD } from "./WebsiteTitle";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";

export const WebsiteShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Organization"
          source="organization.id"
          reference="Organization"
        >
          <TextField source={ORGANIZATION_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Page" target="websiteId" label="Pages">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="Website"
              source="website.id"
              reference="Website"
            >
              <TextField source={WEBSITE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
