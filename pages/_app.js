import { useRouter } from "next/router";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Head from "next/head";
import Error from "next/error";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    const router = useRouter();
    return (
        <>
            <Head>
                <title>Iftekhar</title>
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
