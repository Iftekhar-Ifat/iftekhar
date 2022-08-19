import { useRouter } from "next/router";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
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
                <meta name="theme-color" content="#000000" />
                <meta
                    name="description"
                    content="Iftekhar's personal portfolio website"
                />
                <meta name="author" content="Iftekhar" />

                <meta
                    name="image"
                    property="og:image"
                    content="https://ibb.co/R6p3Pws"
                />

                <meta property="og:image" content="https://ibb.co/R6p3Pws" />
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
