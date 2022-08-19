import React from "react";
import styles from "../../styles/HomePage/HomePage.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import ProfilePhoto from "../../public/asset/profile_photo.png";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const IntroSection = () => {
    const router = useRouter();
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
                        src={ProfilePhoto}
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Pellentesque dignissim enim sit amet. Aliquet risus feugiat in
                ante metus dictum.
            </p>
            <div className="flex justify-between pt-8 md:px-4">
                <div className="flex">
                    <a
                        href="https://www.linkedin.com/in/iftekhar-ahmed-0a082a196/"
                        className="hover:scale-110"
                    >
                        <FaLinkedin
                            className="m-2 "
                            size={25}
                            color={"#959595"}
                        />
                    </a>
                    <button
                        onClick={() =>
                            router.push("mailto:iftekharifat007@gmail.com")
                        }
                        className="hover:scale-110"
                    >
                        <FaEnvelope
                            className="m-2"
                            size={25}
                            color={"#959595"}
                        />
                    </button>
                    <a
                        href="https://twitter.com/_ifte"
                        className="hover:scale-110"
                    >
                        <FaTwitter
                            className="m-2"
                            size={25}
                            color={"#959595"}
                        />
                    </a>
                    <a
                        href="https://github.com/Iftekhar-Ifat"
                        className="hover:scale-110"
                    >
                        <FaGithub className="m-2" size={25} color={"#959595"} />
                    </a>
                </div>
                <button className="inline-flex items-center justify-center px-2 rounded-md font-medium text-white bg-backgroundGray hover:scale-105">
                    Download CV
                </button>
            </div>
        </>
    );
};

export default IntroSection;
