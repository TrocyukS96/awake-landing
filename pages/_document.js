// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document'
export default class MyDoc extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
                    />
                </Head>
                <body  style={{margin:'0'}}>
                <Main  />
                <NextScript />
                </body>
            </Html>
        )
    }
}