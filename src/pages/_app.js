import { useEffect } from "react";
import Layout from "../components/layout";
import "@/styles/globals.css";
import AOS from "aos";
import { BlogProvider } from "@/context/blogContext";

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
