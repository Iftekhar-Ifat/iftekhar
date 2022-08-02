import React from "react";
import BlogSection from "../components/HomePageComponents/BlogSection";
import Footer from "../components/HomePageComponents/Footer";
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
            <Footer />
        </>
    );
};

export default Home;
