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
import { SectionTemplateWhereInput } from "./SectionTemplateWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SectionTemplateListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SectionTemplateWhereInput,
  })
  @ValidateNested()
  @Type(() => SectionTemplateWhereInput)
  @IsOptional()
  @Field(() => SectionTemplateWhereInput, {
    nullable: true,
  })
  every?: SectionTemplateWhereInput;

  @ApiProperty({
    required: false,
    type: () => SectionTemplateWhereInput,
  })
  @ValidateNested()
  @Type(() => SectionTemplateWhereInput)
  @IsOptional()
  @Field(() => SectionTemplateWhereInput, {
    nullable: true,
  })
  some?: SectionTemplateWhereInput;

  @ApiProperty({
    required: false,
    type: () => SectionTemplateWhereInput,
  })
  @ValidateNested()
  @Type(() => SectionTemplateWhereInput)
  @IsOptional()
  @Field(() => SectionTemplateWhereInput, {
    nullable: true,
  })
  none?: SectionTemplateWhereInput;
}
export { SectionTemplateListRelationFilter as SectionTemplateListRelationFilter };
