import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { Web3sdksProvider } from "@web3sdks/react/solana";
import type { AppProps } from "next/app";
import Web3sdksGuideFooter from "../components/guide/Web3sdksGuideFooter";
import Header from "../components/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3sdksProvider network={"devnet"}>
      <WalletModalProvider>
        <Header />
        <Component {...pageProps} />
        <Web3sdksGuideFooter />
      </WalletModalProvider>
    </Web3sdksProvider>
  );
}

export default MyApp;
