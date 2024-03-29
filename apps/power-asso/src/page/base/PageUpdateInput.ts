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
import { PageSectionUpdateManyWithoutPagesInput } from "./PageSectionUpdateManyWithoutPagesInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { WebsiteWhereUniqueInput } from "../../website/base/WebsiteWhereUniqueInput";

@InputType()
class PageUpdateInput {
  @ApiProperty({
    required: false,
    type: () => PageSectionUpdateManyWithoutPagesInput,
  })
  @ValidateNested()
  @Type(() => PageSectionUpdateManyWithoutPagesInput)
  @IsOptional()
  @Field(() => PageSectionUpdateManyWithoutPagesInput, {
    nullable: true,
  })
  sections?: PageSectionUpdateManyWithoutPagesInput;

  @ApiProperty({
    required: false,
    type: () => WebsiteWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => WebsiteWhereUniqueInput)
  @IsOptional()
  @Field(() => WebsiteWhereUniqueInput, {
    nullable: true,
  })
  website?: WebsiteWhereUniqueInput | null;
}

export { PageUpdateInput as PageUpdateInput };
