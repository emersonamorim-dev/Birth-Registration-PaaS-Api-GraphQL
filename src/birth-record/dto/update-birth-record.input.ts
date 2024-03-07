import { Field, InputType, Int } from '@nestjs/graphql';
import { IsDateString, IsOptional, IsString, IsInt } from 'class-validator';

@InputType()
export class UpdateBirthRecordInput {
  @Field(() => Int)
  @IsInt()
  id: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  fullName?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsDateString()
  dateOfBirth?: Date;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  placeOfBirth?: string;

  @Field(() => [String], { nullable: 'itemsAndList' })
  @IsString({ each: true })
  @IsOptional()
  parentNames?: string[];
}
