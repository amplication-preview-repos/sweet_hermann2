import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { DeviceTitle } from "../device/DeviceTitle";
import { SensorMeasurementTitle } from "../sensorMeasurement/SensorMeasurementTitle";

export const SensorEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
