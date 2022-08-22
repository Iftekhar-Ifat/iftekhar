import Image from "next/image";
import React from "react";
import styles from "../../styles/HomePage/HomePage.module.css";
import skillData from "../../public/asset/skill-data/skills.json";

const SkillsSection = () => {
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
                              className={`py-4 font-medium center text-xl md:text-2xl ${styles.skill_container}`}
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
