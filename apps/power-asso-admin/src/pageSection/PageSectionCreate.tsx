import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PageTitle } from "../page/PageTitle";
import { SectionTemplateTitle } from "../sectionTemplate/SectionTemplateTitle";

export const PageSectionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="page.id" reference="Page" label="Page">
          <SelectInput optionText={PageTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="Template.id"
          reference="SectionTemplate"
          label="Template"
        >
          <SelectInput optionText={SectionTemplateTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
