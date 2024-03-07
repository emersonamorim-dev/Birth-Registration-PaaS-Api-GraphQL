import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateBirthRecordInput, UpdateBirthRecordInput } from './dto';
import { BirthRecord } from './entities/birth-record.entity'; 
import { BirthRecordService } from './birth-record.service';


@Resolver('BirthRecord')
export class BirthRecordResolver {
  constructor(private readonly birthRecordService: BirthRecordService) {}


  @Mutation(returns => BirthRecord) 
  async registerBirth(@Args('birthRecordInput') birthRecordInput: CreateBirthRecordInput): Promise<BirthRecord> {
      return this.birthRecordService.create(birthRecordInput);
  }


  @Query(returns => [BirthRecord])
  async birthRecords(): Promise<BirthRecord[]> {
    return this.birthRecordService.findAll();
  }

  @Query(returns => BirthRecord, { nullable: true }) 
  async findOne(@Args('id') id: number): Promise<BirthRecord> {
    return this.birthRecordService.findOne(id);
  }

  @Mutation(returns => BirthRecord)
  async updateBirthRecord(
    @Args('updateBirthRecordInput') updateBirthRecordInput: UpdateBirthRecordInput,
  ): Promise<BirthRecord> {
    return this.birthRecordService.update(updateBirthRecordInput.id, updateBirthRecordInput);
  }

  @Mutation(returns => Boolean)
  async removeBirthRecord(@Args('id') id: number): Promise<boolean> {
    return this.birthRecordService.remove(id);
  }
}
