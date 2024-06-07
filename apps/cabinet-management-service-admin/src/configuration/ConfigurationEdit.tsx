import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { DeviceTitle } from "../device/DeviceTitle";

export const ConfigurationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="device.id" reference="Device" label="Device">
          <SelectInput optionText={DeviceTitle} />
        </ReferenceInput>
        <div />
      </SimpleForm>
    </Edit>
  );
};
