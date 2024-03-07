import { InputType, Field } from '@nestjs/graphql';
import { IsDateString, IsNotEmpty, IsString, IsArray, IsOptional } from 'class-validator';

@InputType()
export class CreateBirthRecordInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  fullName: string;

  @Field()
  @IsDateString()
  dateOfBirth: Date;

  @Field()
  @IsNotEmpty()
  @IsString()
  placeOfBirth: string;

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  parentNames?: string[];

  @Field()
  @IsNotEmpty()
  @IsString()
  registrationNumber: string; 
}
