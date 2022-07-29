import React from "react";
import IntroSection from "../components/HomePageComponents/IntroSection";
import ProjectSection from "../components/HomePageComponents/ProjectSection";
import SkillsSection from "../components/HomePageComponents/SkillsSection";
import HrLine from "../components/HrLine";

const Home = () => {
    return (
        <>
            <IntroSection />
            <HrLine />
            <SkillsSection />
            <HrLine />
            <ProjectSection />
            <HrLine />
        </>
    );
};

export default Home;
