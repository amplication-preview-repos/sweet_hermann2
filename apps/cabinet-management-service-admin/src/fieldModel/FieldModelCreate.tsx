import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { DeviceTitle } from "../device/DeviceTitle";
import { GreenhouseTitle } from "../greenhouse/GreenhouseTitle";

export const FieldModelCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="devices"
          reference="Device"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DeviceTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="greenhouse.id"
          reference="Greenhouse"
          label="Greenhouse"
        >
          <SelectInput optionText={GreenhouseTitle} />
        </ReferenceInput>
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
