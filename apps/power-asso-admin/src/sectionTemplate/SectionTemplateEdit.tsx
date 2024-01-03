import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { PageSectionTitle } from "../pageSection/PageSectionTitle";

export const SectionTemplateEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="sections"
          reference="PageSection"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PageSectionTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
