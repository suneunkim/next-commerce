import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import "@/styles/globals.css";
import { MantineProvider } from "@mantine/core";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <MantineProvider>
        <Component {...pageProps} />
      </MantineProvider>
      <Footer />
    </>
  );
}
