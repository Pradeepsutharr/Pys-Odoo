import { useEffect } from "react";
import "@/styles/globals.css";
import AOS from "aos";
import { BlogProvider } from "@/context/blogContext";
import dynamic from "next/dynamic";

const Layout = dynamic(() => import("../components/layout/layout"), {
  ssr: false,
});

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <BlogProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </BlogProvider>
  );
}
