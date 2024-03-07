import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { BirthRecordModule } from './birth-record/birth-record.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    BirthRecordModule,
    // outros módulos aqui
  ],
  // controllers: [],
  // providers: [],
})
export class AppModule {}
