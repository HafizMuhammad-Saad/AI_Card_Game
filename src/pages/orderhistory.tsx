import { CONFIG } from 'src/config-global';

import { OrderHistory } from 'src/sections/orderhistory';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`Order History - ${CONFIG.appName}`}</title>

      <OrderHistory />
    </>
  );
}
