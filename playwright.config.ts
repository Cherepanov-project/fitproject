import { PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {
  testMatch:'**/playwright_tests/*.test.pw.ts',
};
export default config;