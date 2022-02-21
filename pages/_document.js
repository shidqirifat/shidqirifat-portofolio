import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" href="/logo/icon-192x192.png" />
          <link rel="apple-touch-icon" href="/logo/icon-192x192.png"></link>
          <meta name="theme-color" content="#0F172A" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
