import React from "react";
import BlogSection from "../components/HomePageComponents/BlogSection";
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
            <BlogSection />
            <HrLine />
        </>
    );
};

export default Home;
