import React from "react";
import IntroSection from "../components/HomePageComponents/IntroSection";
import ProjectSection from "../components/HomePageComponents/ProjectSection";
import SkillsSection from "../components/HomePageComponents/SkillsSection";
import HrLine from "../components/HrLine";

const Home = () => {
    return (
        <div className="w-full px-[10%] md:px-[25%]">
            <IntroSection />
            <HrLine />
            <SkillsSection />
            <HrLine />
            <ProjectSection />
            <HrLine />
        </div>
    );
};

export default Home;
