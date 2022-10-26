import { useRouter } from "next/router";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import Error from "next/error";
import "../styles/globals.css";
import "@fontsource/fira-code";

function MyApp({ Component, pageProps }) {
    const router = useRouter();
    return (
        <>
            <Head>
                <title>Iftekhar</title>
                <meta
                    name="description"
                    content="Iftekhar's personal portfolio website"
                />
                <meta name="author" content="Iftekhar" />

                <meta
                    name="image"
                    property="og:image"
                    content="https://i.ibb.co/c8c6tnZ/meta-img-blog.png"
                />
                <meta
                    name="twitter:image"
                    href="https://cdn.spiriteddrive.club/images/banner-twitter.jpg"
                    content="https://i.ibb.co/c8c6tnZ/meta-img-blog.png"
                />
                <meta
                    property="og:image"
                    content="https://i.ibb.co/c8c6tnZ/meta-img-blog.png"
                />
                <meta property="og:image:type" content="image/png" />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <link rel="shortcut icon" href="/favicon.svg" />
            </Head>
            {router.pathname !== "/_error" ? (
                <>
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
