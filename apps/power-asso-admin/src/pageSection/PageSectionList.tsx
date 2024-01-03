import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PAGE_TITLE_FIELD } from "../page/PageTitle";
import { SECTIONTEMPLATE_TITLE_FIELD } from "../sectionTemplate/SectionTemplateTitle";

export const PageSectionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Sections"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
