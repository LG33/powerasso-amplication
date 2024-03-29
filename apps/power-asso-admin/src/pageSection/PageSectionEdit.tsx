import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PageTitle } from "../page/PageTitle";
import { SectionTemplateTitle } from "../sectionTemplate/SectionTemplateTitle";

export const PageSectionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
