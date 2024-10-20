import { Test, TestingModule } from '@nestjs/testing';
import { PaybillService } from './paybill.service';

describe('PaybillService', () => {
  let service: PaybillService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaybillService],
    }).compile();

    service = module.get<PaybillService>(PaybillService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
