/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { PageSectionWhereUniqueInput } from "../../pageSection/base/PageSectionWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class PageSectionCreateNestedManyWithoutPagesInput {
  @Field(() => [PageSectionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PageSectionWhereUniqueInput],
  })
  connect?: Array<PageSectionWhereUniqueInput>;
}

export { PageSectionCreateNestedManyWithoutPagesInput as PageSectionCreateNestedManyWithoutPagesInput };