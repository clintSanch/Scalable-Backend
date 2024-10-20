import { Injectable } from '@nestjs/common';

@Injectable()
export class PaybillService {
  urlForPaybill = 'https://sandbox.safaricom.co.ke/mpesa/b2b/v1/paymentrequest';
  stkPush = 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest';
  async paytheBill() {}
}
