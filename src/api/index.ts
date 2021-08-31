// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import services from '../services';

export interface CreateInvoiceResponse {
  sessionId: string;
  formToken: string;
  payformUrl: string;
}

export default async function handler(
  amount = 1
): Promise<CreateInvoiceResponse> {
  const result = await services.zetpay.createInvoice({
    amount,
    currency: process.env.ZETPAY_CURRENCY_ID as string,
    payway: process.env.ZETPAY_PAYWAY as string,
    shop_id: Number(process.env.ZETPAY_SHOP_ID),
    shop_order_id: Math.random().toString()
  });

  const sessionId = result.data.data.data.session_id;

  const tokenResponse = await services.host2host.getFormToken(sessionId);

  return {
    sessionId,
    formToken: tokenResponse.data.data.form_token,
    payformUrl: tokenResponse.data.data.payform_url
  };
}
