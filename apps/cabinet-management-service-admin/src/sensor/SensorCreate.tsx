import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { DeviceTitle } from "../device/DeviceTitle";
import { SensorMeasurementTitle } from "../sensorMeasurement/SensorMeasurementTitle";

export const SensorCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="device.id" reference="Device" label="Device">
          <SelectInput optionText={DeviceTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="sensorMeasurements"
          reference="SensorMeasurement"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SensorMeasurementTitle} />
        </ReferenceArrayInput>
        <TextInput label="type" source="typeField" />
      </SimpleForm>
    </Create>
  );
};
