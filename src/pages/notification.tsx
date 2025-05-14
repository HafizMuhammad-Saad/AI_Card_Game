import { CONFIG } from 'src/config-global';

import { Notifications } from 'src/sections/settings/notifications';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`Order History - ${CONFIG.appName}`}</title>

      <Notifications />
    </>
  );
}
