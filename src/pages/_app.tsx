import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import "@/styles/globals.css";
import { MantineProvider } from "@mantine/core";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <RecoilRoot>
        <MantineProvider>
          <Component {...pageProps} />
        </MantineProvider>
      </RecoilRoot>
      <Footer />
    </>
  );
}
