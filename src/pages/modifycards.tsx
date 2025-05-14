import { CONFIG } from 'src/config-global';

import { ModifyCards } from 'src/sections/modifyCard';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`Modify Cards - ${CONFIG.appName}`}</title>

      <ModifyCards />
    </>
  );
}
