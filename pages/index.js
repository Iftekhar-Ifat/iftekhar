import React from "react";
import styles from "../styles/HomePage/HomePage.module.css";
import Image from "next/image";
import ProfilePhoto from "../public/asset/profile_photo.png";

const Home = () => {
    return (
        <div className="w-full px-[10%] md:px-[25%]">
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
                I'm <span className={styles.glow_text}>Iftekhar Ahmed</span>
            </span>
        </div>
    );
};

export default Home;
