import { Test, TestingModule } from '@nestjs/testing';
import { MerchantCustomerController } from './merchant-customer.controller';

describe('MerchantCustomerController', () => {
  let controller: MerchantCustomerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MerchantCustomerController],
    }).compile();

    controller = module.get<MerchantCustomerController>(MerchantCustomerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
