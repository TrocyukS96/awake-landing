import MainLayout from "../src/components/MainLayout";
import Head from "next/head";

export default function MyApp({Component, pageProps}) {
    return (
        <MainLayout>
            <Component {...pageProps} />
        </MainLayout>
    )
}