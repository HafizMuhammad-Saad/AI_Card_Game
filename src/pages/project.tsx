import { CONFIG } from 'src/config-global';

import  Projects from 'src/sections/projects';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`Project - ${CONFIG.appName}`}</title>

      <Projects />
    </>
  );
}
