import HDWalletProvider from "@truffle/hdwallet-provider";
import { test } from "@playwright/test";

declare global {
  interface Window {
    ethereum: any;
  }
}

test("basic test", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  const provider = new HDWalletProvider({
    mnemonic: {
      phrase:
        "load innocent explain moral core tiger prefer home unit usual frequent card",
    },
    providerOrUrl: "http://localhost:8545",
  });
  // */
  // Error: Unexpected value が発生する
  // おそらく provider がシリアライズできないため
  // https://github.com/microsoft/playwright/blob/1961959dcb726143586a384799f25f149b694214/packages/playwright-core/src/protocol/serializers.ts
  await page.evaluate((provider) => {
    window.ethereum = provider;
  }, provider);

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  await new Promise(() => {});
});
