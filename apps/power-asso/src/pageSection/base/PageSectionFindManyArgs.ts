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
import { PageSectionWhereInput } from "./PageSectionWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PageSectionOrderByInput } from "./PageSectionOrderByInput";

@ArgsType()
class PageSectionFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PageSectionWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PageSectionWhereInput, { nullable: true })
  @Type(() => PageSectionWhereInput)
  where?: PageSectionWhereInput;

  @ApiProperty({
    required: false,
    type: [PageSectionOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PageSectionOrderByInput], { nullable: true })
  @Type(() => PageSectionOrderByInput)
  orderBy?: Array<PageSectionOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { PageSectionFindManyArgs as PageSectionFindManyArgs };