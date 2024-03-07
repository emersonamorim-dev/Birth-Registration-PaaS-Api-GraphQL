import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBirthRecordInput, UpdateBirthRecordInput } from './dto';

@Injectable()
export class BirthRecordService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateBirthRecordInput) {
    return this.prisma.birthRecord.create({ data });
  }

  async findAll() {
    return this.prisma.birthRecord.findMany();
  }

  async findOne(id: number) {
    return this.prisma.birthRecord.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdateBirthRecordInput) {
    return this.prisma.birthRecord.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    await this.prisma.birthRecord.delete({ where: { id } });
    return true;
  }
}
