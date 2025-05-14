import { CONFIG } from 'src/config-global';

import { CreateCard } from 'src/sections/createCard';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`Create Card - ${CONFIG.appName}`}</title>

      <CreateCard />
    </>
  );
}
