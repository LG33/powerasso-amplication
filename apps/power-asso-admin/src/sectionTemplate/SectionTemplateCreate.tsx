import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { PageSectionTitle } from "../pageSection/PageSectionTitle";

export const SectionTemplateCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
