import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { FarmList } from "./farm/FarmList";
import { FarmCreate } from "./farm/FarmCreate";
import { FarmEdit } from "./farm/FarmEdit";
import { FarmShow } from "./farm/FarmShow";
import { FieldModelList } from "./fieldModel/FieldModelList";
import { FieldModelCreate } from "./fieldModel/FieldModelCreate";
import { FieldModelEdit } from "./fieldModel/FieldModelEdit";
import { FieldModelShow } from "./fieldModel/FieldModelShow";
import { DeviceList } from "./device/DeviceList";
import { DeviceCreate } from "./device/DeviceCreate";
import { DeviceEdit } from "./device/DeviceEdit";
import { DeviceShow } from "./device/DeviceShow";
import { GreenhouseList } from "./greenhouse/GreenhouseList";
import { GreenhouseCreate } from "./greenhouse/GreenhouseCreate";
import { GreenhouseEdit } from "./greenhouse/GreenhouseEdit";
import { GreenhouseShow } from "./greenhouse/GreenhouseShow";
import { SensorList } from "./sensor/SensorList";
import { SensorCreate } from "./sensor/SensorCreate";
import { SensorEdit } from "./sensor/SensorEdit";
import { SensorShow } from "./sensor/SensorShow";
import { ConfigurationList } from "./configuration/ConfigurationList";
import { ConfigurationCreate } from "./configuration/ConfigurationCreate";
import { ConfigurationEdit } from "./configuration/ConfigurationEdit";
import { ConfigurationShow } from "./configuration/ConfigurationShow";
import { SensorMeasurementList } from "./sensorMeasurement/SensorMeasurementList";
import { SensorMeasurementCreate } from "./sensorMeasurement/SensorMeasurementCreate";
import { SensorMeasurementEdit } from "./sensorMeasurement/SensorMeasurementEdit";
import { SensorMeasurementShow } from "./sensorMeasurement/SensorMeasurementShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"CabinetManagementService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Farm"
          list={FarmList}
          edit={FarmEdit}
          create={FarmCreate}
          show={FarmShow}
        />
        <Resource
          name="FieldModel"
          list={FieldModelList}
          edit={FieldModelEdit}
          create={FieldModelCreate}
          show={FieldModelShow}
        />
        <Resource
          name="Device"
          list={DeviceList}
          edit={DeviceEdit}
          create={DeviceCreate}
          show={DeviceShow}
        />
        <Resource
          name="Greenhouse"
          list={GreenhouseList}
          edit={GreenhouseEdit}
          create={GreenhouseCreate}
          show={GreenhouseShow}
        />
        <Resource
          name="Sensor"
          list={SensorList}
          edit={SensorEdit}
          create={SensorCreate}
          show={SensorShow}
        />
        <Resource
          name="Configuration"
          list={ConfigurationList}
          edit={ConfigurationEdit}
          create={ConfigurationCreate}
          show={ConfigurationShow}
        />
        <Resource
          name="SensorMeasurement"
          list={SensorMeasurementList}
          edit={SensorMeasurementEdit}
          create={SensorMeasurementCreate}
          show={SensorMeasurementShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
