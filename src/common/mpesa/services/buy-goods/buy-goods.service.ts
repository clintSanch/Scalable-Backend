import { Injectable } from '@nestjs/common';

@Injectable()
export class BuyGoodsService {
  urlForTill = 'https://sandbox.safaricom.co.ke/mpesa/b2b/v1/paymentrequest';
  async payViaTill() {}
}
