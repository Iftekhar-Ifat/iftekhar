import React from "react";
import Image from "next/image";
import styles from "../../styles/HomePage/HomePage.module.css";
import projectData from "../../public/asset/project-data/featured_projects.json";
import Link from "next/link";

const ProjectSection = () => {
    return (
        <>
            <div
                className={`font-medium text-3xl pb-4 md:text-5xl ${styles.glow_text}`}
            >
                Featured Projects
            </div>
            {projectData.length
                ? projectData.map((project) => (
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
                              <span className="w-full font-medium center text-xl md:text-2xl">
                                  {project.title}
                              </span>
                              <p className="pt-4 md:px-16 leading-8 text-xl text-gray ">
                                  {project.description}
                              </p>
                              <div className="w-full flex justify-end">
                                  <Link href="/projects">
                                      <p className="text-gray cursor-pointer hover:scale-105">
                                          see more
                                      </p>
                                  </Link>
                              </div>
                          </div>
                      </div>
                  ))
                : null}
        </>
    );
};

export default ProjectSection;
