import { CONFIG } from 'src/config-global';

import { Settings } from 'src/sections/settings/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`Project - ${CONFIG.appName}`}</title>

      <Settings />
    </>
  );
}
