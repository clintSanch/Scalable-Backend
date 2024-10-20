import { Module } from '@nestjs/common';
import { MerchantCustomerController } from '../controllers/merchant-customer/merchant-customer.controller';
import { PaybillService } from '../services/paybill/paybill.service';
import { BuyGoodsService } from '../services/buy-goods/buy-goods.service';

@Module({
  imports: [],
  controllers: [MerchantCustomerController],
  providers: [PaybillService, BuyGoodsService],
})
export class MpesaModule {}
