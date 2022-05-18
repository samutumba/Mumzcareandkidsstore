// pages/_document.js

import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <meta charSet="UTF-8"></meta>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Cabin&family=Quicksand&family=Raleway:ital,wght@0,500;0,700;1,500&display=swap"
            rel="stylesheet"
          />
          <meta
            property="og:image"
            content="/favicon.ico"
          />
         
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1.0"
          ></meta>
          <meta
            name="google-site-verification"
            content="MmSloumSoexfg8MWczXCdmQu4Qsnlhqj8OPjrtiPZcw"
          />
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
