import { Test, TestingModule } from '@nestjs/testing';
import { BuyGoodsService } from './buy-goods.service';

describe('BuyGoodsService', () => {
  let service: BuyGoodsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BuyGoodsService],
    }).compile();

    service = module.get<BuyGoodsService>(BuyGoodsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
