/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SensorMeasurementWhereUniqueInput } from "./SensorMeasurementWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { SensorMeasurementUpdateInput } from "./SensorMeasurementUpdateInput";

@ArgsType()
class UpdateSensorMeasurementArgs {
  @ApiProperty({
    required: true,
    type: () => SensorMeasurementWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SensorMeasurementWhereUniqueInput)
  @Field(() => SensorMeasurementWhereUniqueInput, { nullable: false })
  where!: SensorMeasurementWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => SensorMeasurementUpdateInput,
  })
  @ValidateNested()
  @Type(() => SensorMeasurementUpdateInput)
  @Field(() => SensorMeasurementUpdateInput, { nullable: false })
  data!: SensorMeasurementUpdateInput;
}

export { UpdateSensorMeasurementArgs as UpdateSensorMeasurementArgs };
