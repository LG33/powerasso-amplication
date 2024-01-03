import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PageSectionTitle } from "../pageSection/PageSectionTitle";
import { WebsiteTitle } from "../website/WebsiteTitle";

export const PageCreate = (props: CreateProps): React.ReactElement => {
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
        <ReferenceInput source="website.id" reference="Website" label="Website">
          <SelectInput optionText={WebsiteTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
