import { Test, TestingModule } from '@nestjs/testing';
import { BirthRecordService } from './birth-record.service';

describe('BirthRecordService', () => {
  let service: BirthRecordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BirthRecordService],
    }).compile();

    service = module.get<BirthRecordService>(BirthRecordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
