import React, { useState, useCallback, useEffect } from "react";
import styles from "../../styles/HomePage/HomePage.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import ProfilePhoto from "../../public/asset/profile_photo.png";
import ProfilePhoto2 from "../../public/asset/profile_photo2.jpg";
import {
    FaGithub,
    FaTwitter,
    FaLinkedin,
    FaFacebook,
    FaEnvelope,
} from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";

const IntroSection = () => {
    const router = useRouter();
    const [copied, setCopied] = useState(false);
    const onCopy = useCallback(() => {
        setCopied(true);
    }, []);
    useEffect(() => {
        setTimeout(() => {
            setCopied(false);
        }, 4000);
    }, [copied]);

    return (
        <>
            <div
                className={`md:text-5xl pt-14 font-medium text-3xl ${styles.img_container}`}
            >
                <div className="flex justify-between items-center">
                    <span className="pt-4">
                        Hello, <br />
                    </span>
                </div>
                <div className={styles.img_card}>
                    <Image
                        src={ProfilePhoto2}
                        alt="profile photo"
                        priority="true"
                        layout="responsive"
                        objectFit="contain"
                    />
                </div>
            </div>
            <span
                className={`font-medium text-3xl md:text-5xl md:pl-28 ${styles.name_section}`}
            >
                I&apos;m{" "}
                <span className={styles.glow_text}>Iftekhar Ahmed</span>
            </span>
            <p className="pt-4 md:px-16 text-center leading-8 text-xl text-gray ">
                I&apos;m currently pursuing my bachelor&apos;s in Computer
                Science & Engineering. I enjoy building <b>web applications</b>{" "}
                using modern web technologies. I also have a strong interest in{" "}
                <b>ML/AI</b>.
            </p>
            <div className="flex justify-between pt-8 md:px-4">
                <div className="flex">
                    <a
                        href="https://www.linkedin.com/in/iftekhar-ahmed-0a082a196/"
                        className="hover:scale-110"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin
                            className="m-2 "
                            size={25}
                            color={"#959595"}
                        />
                    </a>
                    <CopyToClipboard
                        onCopy={onCopy}
                        text={"iftekharifat007@gmail.com"}
                    >
                        <button
                            onClick={() => {
                                router.push("mailto:iftekharifat007@gmail.com");
                            }}
                            className="hover:scale-110"
                        >
                            <FaEnvelope
                                className="m-2"
                                size={25}
                                color={"#959595"}
                            />
                        </button>
                    </CopyToClipboard>
                    {/* <a
                        href="https://twitter.com/_ifte"
                        className="hover:scale-110"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaTwitter
                            className="m-2"
                            size={25}
                            color={"#959595"}
                        />
                    </a> */}
                    <a
                        href="https://www.facebook.com/Lord.Madara.007"
                        className="hover:scale-110"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaFacebook
                            className="m-2"
                            size={25}
                            color={"#959595"}
                        />
                    </a>
                    <a
                        href="https://github.com/Iftekhar-Ifat"
                        className="hover:scale-110"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub className="m-2" size={25} color={"#959595"} />
                    </a>
                </div>
                <a
                    className="inline-flex items-center justify-center px-2 rounded-md font-medium text-white no-underline bg-backgroundGray hover:scale-105 hover:no-underline"
                    href="https://drive.google.com/file/d/1pOfdlM35dzLdmc0tjahnufbNjQGsuKcd/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Download CV
                </a>
            </div>
            {copied ? (
                <div className="p-4 text-sm text-green-500" role="alert">
                    <span className="font-medium">
                        Email copied to clipboard ✔
                    </span>
                </div>
            ) : null}
        </>
    );
};

export default IntroSection;
