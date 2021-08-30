export interface ICreateInvoiceRequest {
  amount: number;
  currency: string;
  payway: string;
  shop_id: number;
  shop_order_id: string;
  sign?: string;
}

export interface ICreateInvoiceResponse {
  data: {
    data: {
      session_id: string;
    };
    id: number;
    method: string;
    url: string;
  };
  error_code: number;
  message: string;
  result: boolean;
}
