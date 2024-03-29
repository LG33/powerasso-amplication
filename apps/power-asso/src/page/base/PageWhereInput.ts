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
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { PageSectionListRelationFilter } from "../../pageSection/base/PageSectionListRelationFilter";
import { WebsiteWhereUniqueInput } from "../../website/base/WebsiteWhereUniqueInput";

@InputType()
class PageWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => PageSectionListRelationFilter,
  })
  @ValidateNested()
  @Type(() => PageSectionListRelationFilter)
  @IsOptional()
  @Field(() => PageSectionListRelationFilter, {
    nullable: true,
  })
  sections?: PageSectionListRelationFilter;

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
  website?: WebsiteWhereUniqueInput;
}

export { PageWhereInput as PageWhereInput };
