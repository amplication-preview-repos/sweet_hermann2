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

import { ConfigurationTitle } from "../configuration/ConfigurationTitle";
import { FieldModelTitle } from "../fieldModel/FieldModelTitle";
import { SensorTitle } from "../sensor/SensorTitle";

export const DeviceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="configurations"
          reference="Configuration"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ConfigurationTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="fieldField.id"
          reference="FieldModel"
          label="Field"
        >
          <SelectInput optionText={FieldModelTitle} />
        </ReferenceInput>
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="sensors"
          reference="Sensor"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SensorTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
