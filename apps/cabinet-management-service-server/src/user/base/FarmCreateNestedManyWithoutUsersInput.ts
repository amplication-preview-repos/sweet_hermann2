/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { FarmWhereUniqueInput } from "../../farm/base/FarmWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class FarmCreateNestedManyWithoutUsersInput {
  @Field(() => [FarmWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FarmWhereUniqueInput],
  })
  connect?: Array<FarmWhereUniqueInput>;
}

export { FarmCreateNestedManyWithoutUsersInput as FarmCreateNestedManyWithoutUsersInput };
