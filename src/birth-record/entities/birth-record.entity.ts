import { ObjectType, Field, ID, GraphQLISODateTime } from '@nestjs/graphql';

@ObjectType()
export class BirthRecord {
  @Field(type => ID)
  id: number;

  @Field()
  fullName: string;

  @Field(type => GraphQLISODateTime)
  dateOfBirth: Date;

  @Field()
  placeOfBirth: string;

  @Field(type => [String])
  parentNames: string[];

  @Field()
  registrationNumber: string;

  @Field(type => GraphQLISODateTime)
  createdAt: Date;

  @Field(type => GraphQLISODateTime)
  updatedAt: Date;
}
