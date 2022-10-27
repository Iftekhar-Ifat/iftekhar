import { useRouter } from "next/router";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import Error from "next/error";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import "../styles/globals.css";
import "@fontsource/fira-code";
import "@fontsource/fira-sans";

function MyApp({ Component, pageProps }) {
    const router = useRouter();
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/favicon.svg" />
                <meta property="og:type" content="article" />
                <meta
                    property="og:image"
                    content="https://i.ibb.co/qsRnFyB/800x600.png"
                />
            </Head>
            {router.pathname !== "/_error" ? (
                <>
                    <DefaultSeo {...SEO} />
                    <NavBar />
                    <div className="w-full px-[10%] md:px-[25%]">
                        <Component {...pageProps} />
                        <Footer />
                        <Analytics />
                    </div>
                </>
            ) : (
                <>
                    <Error statusCode={"404"} />
                </>
            )}
        </>
    );
}

export default MyApp;
