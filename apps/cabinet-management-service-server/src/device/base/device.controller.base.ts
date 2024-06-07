/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { DeviceService } from "../device.service";
import { DeviceCreateInput } from "./DeviceCreateInput";
import { Device } from "./Device";
import { DeviceFindManyArgs } from "./DeviceFindManyArgs";
import { DeviceWhereUniqueInput } from "./DeviceWhereUniqueInput";
import { DeviceUpdateInput } from "./DeviceUpdateInput";
import { ConfigurationFindManyArgs } from "../../configuration/base/ConfigurationFindManyArgs";
import { Configuration } from "../../configuration/base/Configuration";
import { ConfigurationWhereUniqueInput } from "../../configuration/base/ConfigurationWhereUniqueInput";
import { SensorFindManyArgs } from "../../sensor/base/SensorFindManyArgs";
import { Sensor } from "../../sensor/base/Sensor";
import { SensorWhereUniqueInput } from "../../sensor/base/SensorWhereUniqueInput";

export class DeviceControllerBase {
  constructor(protected readonly service: DeviceService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Device })
  async createDevice(@common.Body() data: DeviceCreateInput): Promise<Device> {
    return await this.service.createDevice({
      data: {
        ...data,

        fieldField: data.fieldField
          ? {
              connect: data.fieldField,
            }
          : undefined,
      },
      select: {
        createdAt: true,

        fieldField: {
          select: {
            id: true,
          },
        },

        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Device] })
  @ApiNestedQuery(DeviceFindManyArgs)
  async devices(@common.Req() request: Request): Promise<Device[]> {
    const args = plainToClass(DeviceFindManyArgs, request.query);
    return this.service.devices({
      ...args,
      select: {
        createdAt: true,

        fieldField: {
          select: {
            id: true,
          },
        },

        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Device })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async device(
    @common.Param() params: DeviceWhereUniqueInput
  ): Promise<Device | null> {
    const result = await this.service.device({
      where: params,
      select: {
        createdAt: true,

        fieldField: {
          select: {
            id: true,
          },
        },

        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Device })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateDevice(
    @common.Param() params: DeviceWhereUniqueInput,
    @common.Body() data: DeviceUpdateInput
  ): Promise<Device | null> {
    try {
      return await this.service.updateDevice({
        where: params,
        data: {
          ...data,

          fieldField: data.fieldField
            ? {
                connect: data.fieldField,
              }
            : undefined,
        },
        select: {
          createdAt: true,

          fieldField: {
            select: {
              id: true,
            },
          },

          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Device })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteDevice(
    @common.Param() params: DeviceWhereUniqueInput
  ): Promise<Device | null> {
    try {
      return await this.service.deleteDevice({
        where: params,
        select: {
          createdAt: true,

          fieldField: {
            select: {
              id: true,
            },
          },

          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/configurations")
  @ApiNestedQuery(ConfigurationFindManyArgs)
  async findConfigurations(
    @common.Req() request: Request,
    @common.Param() params: DeviceWhereUniqueInput
  ): Promise<Configuration[]> {
    const query = plainToClass(ConfigurationFindManyArgs, request.query);
    const results = await this.service.findConfigurations(params.id, {
      ...query,
      select: {
        createdAt: true,

        device: {
          select: {
            id: true,
          },
        },

        id: true,
        parameters: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/configurations")
  async connectConfigurations(
    @common.Param() params: DeviceWhereUniqueInput,
    @common.Body() body: ConfigurationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      configurations: {
        connect: body,
      },
    };
    await this.service.updateDevice({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/configurations")
  async updateConfigurations(
    @common.Param() params: DeviceWhereUniqueInput,
    @common.Body() body: ConfigurationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      configurations: {
        set: body,
      },
    };
    await this.service.updateDevice({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/configurations")
  async disconnectConfigurations(
    @common.Param() params: DeviceWhereUniqueInput,
    @common.Body() body: ConfigurationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      configurations: {
        disconnect: body,
      },
    };
    await this.service.updateDevice({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/sensors")
  @ApiNestedQuery(SensorFindManyArgs)
  async findSensors(
    @common.Req() request: Request,
    @common.Param() params: DeviceWhereUniqueInput
  ): Promise<Sensor[]> {
    const query = plainToClass(SensorFindManyArgs, request.query);
    const results = await this.service.findSensors(params.id, {
      ...query,
      select: {
        createdAt: true,

        device: {
          select: {
            id: true,
          },
        },

        id: true,
        typeField: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/sensors")
  async connectSensors(
    @common.Param() params: DeviceWhereUniqueInput,
    @common.Body() body: SensorWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      sensors: {
        connect: body,
      },
    };
    await this.service.updateDevice({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/sensors")
  async updateSensors(
    @common.Param() params: DeviceWhereUniqueInput,
    @common.Body() body: SensorWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      sensors: {
        set: body,
      },
    };
    await this.service.updateDevice({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/sensors")
  async disconnectSensors(
    @common.Param() params: DeviceWhereUniqueInput,
    @common.Body() body: SensorWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      sensors: {
        disconnect: body,
      },
    };
    await this.service.updateDevice({
      where: params,
      data,
      select: { id: true },
    });
  }
}
