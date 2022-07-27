import NavBar from "../components/NavBar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <NavBar />
            <div
                style={{
                    height: "2px",
                    background:
                        "linear-gradient(90deg, #249AA1 0%, #2B66BE 98.92%)",
                    boxShadow: "0px 0px 20px #249AA1",
                }}
            ></div>

            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
