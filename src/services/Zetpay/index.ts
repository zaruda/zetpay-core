import axios, { AxiosInstance } from 'axios';
import { ICreateInvoiceRequest, ICreateInvoiceResponse } from './types';
import { createHash } from 'crypto';

class ZetpayService {
  private readonly client: AxiosInstance;

  constructor(baseUrl: string) {
    this.client = axios.create({
      baseURL: baseUrl
    });
  }

  private generateSign(data: string) {
    return createHash('sha256').update(data).digest('hex');
  }

  public async createInvoice(data: ICreateInvoiceRequest) {
    const stringToSign = `${data.amount}:${data.currency}:${data.payway}:${data.shop_id}:${data.shop_order_id}${process.env.ZETPAY_API_KEY}`;

    return await this.client.post<ICreateInvoiceResponse>('/invoice/create', {
      ...data,
      sign: this.generateSign(stringToSign)
    });
  }
}

export default ZetpayService;
