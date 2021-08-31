import React from 'react';
import { Formik, Field } from 'formik';
import { object, string } from 'yup';
import {
  Container,
  Button,
  Grid,
  Typography,
  makeStyles,
  Theme,
  Link as MuiLink
} from '@material-ui/core';

import { CreateInvoiceResponse } from '../../api';

import TextField from '../TextField';

const useStyles = makeStyles<Theme>(theme => ({
  root: {
    padding: theme.spacing(4, 2),
    height: '95vh'
  },
  form: {
    display: 'grid',
    gridTemplateRows: 'auto 1fr',
    height: `calc(100% - ${theme.spacing(6)}px)`,
    marginTop: theme.spacing(6)
  },
  footer: {
    marginTop: 'auto'
  },
  footerCopy: {
    fontSize: 10,
    marginBottom: theme.spacing(1),
    '& > a': {
      color: theme.palette.common.black
    }
  }
}));

interface SubscribeForm {
  card: string;
  date: string;
  cvv: string;
  card_holder: string;
  email: string;
}

const cardField = 'card';
const dateField = 'date';
const cvvField = 'cvv';
const nameField = 'card_holder';
const emailField = 'email';

const initialValues: SubscribeForm = {
  [cardField]: '',
  [dateField]: '',
  [cvvField]: '',
  [nameField]: '',
  [emailField]: ''
};

enum Mask {
  Date = '## / ##',
  Card = '#### #### #### ####',
  CVV = '###'
}

const schema = object({
  [cardField]: string().max(16).required('Card number is required'),
  [dateField]: string().required('Date is required'),
  [cvvField]: string().required('CVV is required'),
  [nameField]: string().required('Card holder name is required'),
  [emailField]: string().email().required('Email is required')
});

export default function SubscribeForm({
  payformUrl,
  sessionId,
  formToken
}: Partial<CreateInvoiceResponse>) {
  const classes = useStyles();

  const handleSubmit = async () => {};

  return (
    <Container className={classes.root}>
      <Typography variant="h3" align="center">
        Add credit or debit card
      </Typography>

      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <form className={classes.form} action={payformUrl} method="POST">
            <input type="hidden" name="session_id" value={sessionId} />
            <input type="hidden" name="form_token" value={formToken} />
            <input
              type="hidden"
              name="expiry_month"
              value={values.date.substring(0, 2)}
            />
            <input
              type="hidden"
              name="expiry_year"
              value={values.date.substring(2)}
            />
            <input
              type="hidden"
              name="card_number"
              value={values.card && values.card.replaceAll(' ', '')}
            />
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Field
                  name={cardField}
                  component={TextField}
                  fullWidth
                  variant="outlined"
                  size="small"
                  label="Card number"
                  mask={Mask.Card}
                />
              </Grid>
              <Grid item xs={6}>
                <Field
                  name={dateField}
                  component={TextField}
                  fullWidth
                  variant="outlined"
                  size="small"
                  label="MM/YY"
                  mask={Mask.Date}
                />
              </Grid>
              <Grid item xs={6}>
                <Field
                  name={cvvField}
                  component={TextField}
                  fullWidth
                  variant="outlined"
                  size="small"
                  type="password"
                  label="CVC"
                  mask={Mask.CVV}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  name={nameField}
                  component={TextField}
                  fullWidth
                  variant="outlined"
                  size="small"
                  label="Name on card"
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  name={emailField}
                  component={TextField}
                  fullWidth
                  variant="outlined"
                  size="small"
                  label="E-mail"
                />
              </Grid>
            </Grid>

            <div className={classes.footer}>
              <Typography
                className={classes.footerCopy}
                color="textSecondary"
                align="center"
              >
                By continuing, you agree to the Google Payments{' '}
                <MuiLink
                  href="https://payments.google.com/payments/apis-secure/u/0/get_legal_document?ldo=0&ldt=buyertos"
                  target="_blank"
                  underline="always"
                >
                  Terms of Service
                </MuiLink>
                . The{' '}
                <MuiLink
                  href="https://payments.google.com/payments/apis-secure/u/0/get_legal_document?ldo=0&ldt=privacynotice&ldl=ru"
                  target="_blank"
                  underline="always"
                >
                  Privacy Notice
                </MuiLink>{' '}
                describes how your data is handled.
              </Typography>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Save
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </Container>
  );
}
