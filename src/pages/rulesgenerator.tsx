import { CONFIG } from 'src/config-global';

import  RulesGenerator  from 'src/sections/rulesgenerator';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`Generate Rules - ${CONFIG.appName}`}</title>

      <RulesGenerator />
    </>
  );
}
