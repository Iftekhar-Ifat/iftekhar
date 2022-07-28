import { useRouter } from "next/router";
import NavBar from "../components/NavBar";
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
            </Head>
            {router.pathname !== "/_error" ? (
                <>
                    <NavBar />
                    <div
                        style={{
                            height: "2px",
                            background:
                                "linear-gradient(90deg, #249AA1 0%, #2B66BE 98.92%)",
                            boxShadow:
                                "0px 0px 10px 1.5px rgba(36, 154, 161, 0.8)",
                        }}
                    ></div>
                    <Component {...pageProps} />
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
