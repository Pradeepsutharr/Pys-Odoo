import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
          referrerpolicy="no-referrer"
          integrity="sha512-...your-integrity-code..."
          crossOrigin="anonymous"
        />
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        ></link>

        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />

        <link rel="icon" type="image/png" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
