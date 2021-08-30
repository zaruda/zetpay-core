import React, { useEffect, useState } from 'react';

import axios from 'axios';

import SubscribeForm from '../../components/Form';
import { CreateInvoiceResponse } from '../../api';

export default function Subscribe() {
  const [response, setResponse] = useState<CreateInvoiceResponse>();

  useEffect(() => {
    async function fetchData() {
      const data = await axios.post<CreateInvoiceResponse>(
        '/api/invoice/create'
      );

      setResponse(data.data);
    }

    fetchData();
  }, []);

  return (
    <SubscribeForm
      sessionId={response?.sessionId}
      formToken={response?.formToken}
      payformUrl={response?.payformUrl}
    />
  );
}
