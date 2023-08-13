import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	webServer: {
		command: 'pnpm build && pnpm preview',
		port: 4174
	},
	testDir: '../scripts/tests',
	testMatch: /(.+\.)?(test|spec)\.[jt]s/
};

export default config;
