/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SensorWhereUniqueInput } from "../../sensor/base/SensorWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
  IsNumber,
} from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SensorMeasurementUpdateInput {
  @ApiProperty({
    required: false,
    type: () => SensorWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SensorWhereUniqueInput)
  @IsOptional()
  @Field(() => SensorWhereUniqueInput, {
    nullable: true,
  })
  sensor?: SensorWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  timestamp?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  typeField?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  value?: number | null;
}

export { SensorMeasurementUpdateInput as SensorMeasurementUpdateInput };
