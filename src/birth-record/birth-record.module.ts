import { Module } from '@nestjs/common';
import { BirthRecordService } from './birth-record.service';
import { BirthRecordResolver } from './birth-record.resolver';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [BirthRecordService, BirthRecordResolver, PrismaService],
  imports: [PrismaModule]
})
export class BirthRecordModule {}
