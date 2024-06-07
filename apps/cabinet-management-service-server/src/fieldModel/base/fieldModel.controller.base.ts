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
import { FieldModelService } from "../fieldModel.service";
import { FieldModelCreateInput } from "./FieldModelCreateInput";
import { FieldModel } from "./FieldModel";
import { FieldModelFindManyArgs } from "./FieldModelFindManyArgs";
import { FieldModelWhereUniqueInput } from "./FieldModelWhereUniqueInput";
import { FieldModelUpdateInput } from "./FieldModelUpdateInput";
import { DeviceFindManyArgs } from "../../device/base/DeviceFindManyArgs";
import { Device } from "../../device/base/Device";
import { DeviceWhereUniqueInput } from "../../device/base/DeviceWhereUniqueInput";

export class FieldModelControllerBase {
  constructor(protected readonly service: FieldModelService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: FieldModel })
  async createFieldModel(
    @common.Body() data: FieldModelCreateInput
  ): Promise<FieldModel> {
    return await this.service.createFieldModel({
      data: {
        ...data,

        greenhouse: data.greenhouse
          ? {
              connect: data.greenhouse,
            }
          : undefined,
      },
      select: {
        createdAt: true,

        greenhouse: {
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
  @swagger.ApiOkResponse({ type: [FieldModel] })
  @ApiNestedQuery(FieldModelFindManyArgs)
  async fieldModels(@common.Req() request: Request): Promise<FieldModel[]> {
    const args = plainToClass(FieldModelFindManyArgs, request.query);
    return this.service.fieldModels({
      ...args,
      select: {
        createdAt: true,

        greenhouse: {
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
  @swagger.ApiOkResponse({ type: FieldModel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async fieldModel(
    @common.Param() params: FieldModelWhereUniqueInput
  ): Promise<FieldModel | null> {
    const result = await this.service.fieldModel({
      where: params,
      select: {
        createdAt: true,

        greenhouse: {
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
  @swagger.ApiOkResponse({ type: FieldModel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateFieldModel(
    @common.Param() params: FieldModelWhereUniqueInput,
    @common.Body() data: FieldModelUpdateInput
  ): Promise<FieldModel | null> {
    try {
      return await this.service.updateFieldModel({
        where: params,
        data: {
          ...data,

          greenhouse: data.greenhouse
            ? {
                connect: data.greenhouse,
              }
            : undefined,
        },
        select: {
          createdAt: true,

          greenhouse: {
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
  @swagger.ApiOkResponse({ type: FieldModel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteFieldModel(
    @common.Param() params: FieldModelWhereUniqueInput
  ): Promise<FieldModel | null> {
    try {
      return await this.service.deleteFieldModel({
        where: params,
        select: {
          createdAt: true,

          greenhouse: {
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

  @common.Get("/:id/devices")
  @ApiNestedQuery(DeviceFindManyArgs)
  async findDevices(
    @common.Req() request: Request,
    @common.Param() params: FieldModelWhereUniqueInput
  ): Promise<Device[]> {
    const query = plainToClass(DeviceFindManyArgs, request.query);
    const results = await this.service.findDevices(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/devices")
  async connectDevices(
    @common.Param() params: FieldModelWhereUniqueInput,
    @common.Body() body: DeviceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      devices: {
        connect: body,
      },
    };
    await this.service.updateFieldModel({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/devices")
  async updateDevices(
    @common.Param() params: FieldModelWhereUniqueInput,
    @common.Body() body: DeviceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      devices: {
        set: body,
      },
    };
    await this.service.updateFieldModel({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/devices")
  async disconnectDevices(
    @common.Param() params: FieldModelWhereUniqueInput,
    @common.Body() body: DeviceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      devices: {
        disconnect: body,
      },
    };
    await this.service.updateFieldModel({
      where: params,
      data,
      select: { id: true },
    });
  }
}
