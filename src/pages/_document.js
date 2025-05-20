import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://storage.googleapis.com" />

        <link rel="preload" as="image" href="/images/hero-bg.png" />
        <link rel="preload" as="image" href="/images/hero-text-shape.svg" />
        <link rel="preload" as="image" href="/images/talk-to-expert-bg.png" />
        <link rel="preload" as="image" href="/images/blog-hero-bg.png" />
        <link rel="preload" as="image" href="/images/service-hero-bg.png" />
        <link
          rel="preload"
          as="image"
          href="/images/industry_talk_to_expert.png"
        />

        {/* Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          rel="preconnect"
          href="https://storage.googleapis.com"
          crossOrigin="true"
        />

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
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
