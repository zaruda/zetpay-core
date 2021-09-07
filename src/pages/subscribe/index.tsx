import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { ThemeProvider } from '@material-ui/core';

import SubscribeForm from '../../components/Form';
import { CreateInvoiceResponse } from '../../api';
import theme from '../../theme';

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
    <ThemeProvider theme={theme}>
      <SubscribeForm
        sessionId={response?.sessionId}
        formToken={response?.formToken}
        payformUrl={response?.payformUrl}
      />
    </ThemeProvider>
  );
}
