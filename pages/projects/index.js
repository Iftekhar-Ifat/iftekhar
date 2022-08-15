import React from "react";
import Image from "next/image";
import styles from "../../styles/projects/projects.module.css";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import AllProjects from "../../public/asset/project-data/projects.json";
const Projects = () => {
    return (
        <>
            <div
                className={`flex justify-center pt-4 pb-8 font-medium text-3xl md:text-5xl ${styles.glow_text}`}
            >
                Projects
            </div>
            {AllProjects.length
                ? AllProjects.map((project) => (
                      <div key={project.id}>
                          <div
                              className={`p-4 my-6 w-full ${styles.project_container}`}
                          >
                              <Image
                                  src={project.image}
                                  alt="project photo"
                                  priority="true"
                                  layout="responsive"
                                  objectFit="contain"
                                  style={{
                                      paddingTop: "2%",
                                      borderRadius: "5px",
                                  }}
                                  width={16}
                                  height={8}
                              />
                          </div>
                          <div className="mb-8">
                              <div className="flex items-center mb-4 w-full justify-between text-center">
                                  <a
                                      href={project.github}
                                      className="hover:scale-110"
                                  >
                                      <FaGithub
                                          className="m-2"
                                          size={25}
                                          color={"#959595"}
                                      />
                                  </a>

                                  <span className="font-medium center text-xl md:text-2xl">
                                      {project.title}
                                  </span>
                                  <a
                                      href={project.live_link}
                                      className="hover:scale-110"
                                  >
                                      <FaLink
                                          className="m-2"
                                          size={25}
                                          color={"#959595"}
                                      />
                                  </a>
                              </div>
                              <div className="mb-3 w-full font-medium center text-l md:text-xl">
                                  Description:
                                  <p className="pt-3 md:px-16 leading-8 text-xl text-gray ">
                                      {project.description}
                                  </p>
                              </div>
                              <div className="w-full font-medium center text-l md:text-xl">
                                  Tech Stack:
                                  <div
                                      className={`pt-3 md:px-16 ${styles.icon_container}`}
                                  >
                                      {project.tech_stack.map((tech) =>
                                          tech.title === "NextJs" ||
                                          tech.title === "ExpressJs" ? (
                                              <Image
                                                  key={tech.key}
                                                  src={tech.icon_url}
                                                  alt={tech.title}
                                                  width="50"
                                                  height="50"
                                                  className="invert"
                                              />
                                          ) : (
                                              <Image
                                                  key={tech.key}
                                                  src={tech.icon_url}
                                                  alt={tech.title}
                                                  width="50"
                                                  height="50"
                                              />
                                          )
                                      )}
                                  </div>
                              </div>
                          </div>
                      </div>
                  ))
                : null}
        </>
    );
};

export default Projects;
