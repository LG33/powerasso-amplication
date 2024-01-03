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
import { PageWhereUniqueInput } from "../../page/base/PageWhereUniqueInput";
import { SectionTemplateWhereUniqueInput } from "../../sectionTemplate/base/SectionTemplateWhereUniqueInput";

@InputType()
class PageSectionWhereInput {
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
    type: () => PageWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PageWhereUniqueInput)
  @IsOptional()
  @Field(() => PageWhereUniqueInput, {
    nullable: true,
  })
  page?: PageWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => SectionTemplateWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SectionTemplateWhereUniqueInput)
  @IsOptional()
  @Field(() => SectionTemplateWhereUniqueInput, {
    nullable: true,
  })
  Template?: SectionTemplateWhereUniqueInput;
}

export { PageSectionWhereInput as PageSectionWhereInput };
