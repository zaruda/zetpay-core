This is a set of components needed to build Zetpay form.

## Env variables

```
ZETPAY_URI=https://core.zetpay.io/
ZETPAY_H2H_URI=https://core.h2h-zetpay.io/
ZETPAY_API_KEY=<YOUR_API_KEY>
ZETPAY_SHOP_ID=<YOUR_SHOP_ID>
ZETPAY_CURRENCY_ID=<YOUR_CURRENCY_ID>
ZETPAY_PAYWAY=<YOUR_PAYWAY>
```

## Usage

```
import { SubscribePage, api } from '@zaruda/zetpay-core'
```

### SubscribePage

Page with the form to enter card data.

### api

Function to fetch all necessary tokens.
