import { Test, TestingModule } from '@nestjs/testing';
import { BirthRecordResolver } from './birth-record.resolver';

describe('BirthRecordResolver', () => {
  let resolver: BirthRecordResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BirthRecordResolver],
    }).compile();

    resolver = module.get<BirthRecordResolver>(BirthRecordResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
