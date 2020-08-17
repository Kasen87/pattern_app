import { createRequire } from 'module';

const REQUIRE = createRequire(import.meta.url);

export const HELPERS = {
  require: REQUIRE,
}
