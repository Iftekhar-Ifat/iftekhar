import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../../styles/HomePage/HomePage.module.css";

const SkillsSection = () => {
    const [skillData, setSkillData] = useState([]);
    // skill data fetching
    useEffect(() => {
        fetch("./asset/skill-data/skills.json")
            .then((res) => res.json())
            .then((data) => {
                setSkillData(data);
            });
    }, []);
    return (
        <>
            <div
                className={`font-medium text-3xl md:text-5xl ${styles.glow_text}`}
            >
                Skills
            </div>
            <div className="md:pl-16 md:pt-6">
                {skillData.length
                    ? skillData.map((domain) => (
                          <div
                              className={`pt-4 font-medium center text-xl md:text-2xl ${styles.skill_container}`}
                              key={domain.id}
                          >
                              <span className="w-full md:w-2/5">
                                  {domain.type}
                              </span>
                              <div
                                  className={`flex justify-start w-3/5 ${styles.icon_container}`}
                              >
                                  {domain.skills.map((skill) =>
                                      skill.title === "NextJs" ||
                                      skill.title === "ExpressJs" ? (
                                          <Image
                                              key={skill.id}
                                              src={skill.icon_url}
                                              alt={skill.title}
                                              width="50"
                                              height="50"
                                              className="invert"
                                          />
                                      ) : (
                                          <Image
                                              key={skill.id}
                                              src={skill.icon_url}
                                              alt={skill.title}
                                              width="50"
                                              height="50"
                                          />
                                      )
                                  )}
                              </div>
                          </div>
                      ))
                    : null}
            </div>
        </>
    );
};

export default SkillsSection;
