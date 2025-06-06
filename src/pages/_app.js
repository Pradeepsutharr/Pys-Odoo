import { useEffect } from "react";
import "@/styles/globals.css";
import AOS from "aos";
import dynamic from "next/dynamic";

const Layout = dynamic(() => import("../components/layout/layout"));

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
