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
import { WebsiteWhereUniqueInput } from "./WebsiteWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class WebsiteFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => WebsiteWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => WebsiteWhereUniqueInput)
  @Field(() => WebsiteWhereUniqueInput, { nullable: false })
  where!: WebsiteWhereUniqueInput;
}

export { WebsiteFindUniqueArgs as WebsiteFindUniqueArgs };
