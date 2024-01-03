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
import { WEBSITE_TITLE_FIELD } from "../website/WebsiteTitle";

export const PageList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Pages"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="Website" source="website.id" reference="Website">
          <TextField source={WEBSITE_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
