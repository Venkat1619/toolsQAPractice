import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './testQA/Tests/bookStoreTest',
  testMatch: ["bookStoreAPI.spec.ts"],
  timeout: 50 * 1000,
  expect: {
    timeout: 15000
  },
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    actionTimeout: 0,
    trace: 'on',
    headless:false,
    screenshot:"on",
    video:"on",
    baseURL:"https://demoqa.com/",
    ignoreHTTPSErrors : true,
    extraHTTPHeaders:{
      "Authorization":"Basic VmVua2F0MTY6VmVua2F0QDE2"
    }
   
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

  ]
});
