import { useEffect } from "react";
import Layout from "../components/layout";
import "@/styles/globals.css";
import AOS from "aos";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
