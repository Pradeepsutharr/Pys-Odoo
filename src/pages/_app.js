import { useEffect } from "react";
import "@/styles/globals.css";
import AOS from "aos";
import dynamic from "next/dynamic";
import Script from "next/script";

const Layout = dynamic(() => import("../components/layout/layout"), {
  ssr: false,
});

const GA_Id = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {/* Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_Id}`}
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_Id}');
        `}
      </Script>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
