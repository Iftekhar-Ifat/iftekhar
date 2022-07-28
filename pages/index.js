import React from "react";
import IntroSection from "../components/HomePageComponents/IntroSection";
import HrLine from "../components/HrLine";

const Home = () => {
    return (
        <div className="w-full px-[10%] md:px-[25%]">
            <IntroSection />
            <HrLine />
        </div>
    );
};

export default Home;
