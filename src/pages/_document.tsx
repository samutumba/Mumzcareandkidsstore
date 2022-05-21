// pages/_document.js

import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8"></meta>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500&family=Raleway:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
          <meta
            property="og:image"
            content="/favicon.ico"
          />
          <link rel="icon" href="/favicon.ico" />  
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
