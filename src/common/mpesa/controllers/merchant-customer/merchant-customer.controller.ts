import { Controller, Post } from '@nestjs/common';

@Controller('merchant-customer')
export class MerchantCustomerController {
  @Post()
  paybill(): string {
    return;
  }

  @Post()
  buygoods(): string {
    return;
  }
}
