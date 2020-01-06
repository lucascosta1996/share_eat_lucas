import Document, { Html, Head, Main, NextScript } from 'next/document'
import { colors } from '../utils/styleguide'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
        <link href="https://fonts.googleapis.com/css?family=Nunito+Sans|Poppins:700&display=swap" rel="stylesheet" />
          <style>{`
            html, body {
              background-color: ${colors.grayBackground};
              margin: 0;
            }
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument