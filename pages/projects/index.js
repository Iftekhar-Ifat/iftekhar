import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../../styles/projects/projects.module.css";
const Projects = () => {
    const [allProjectData, setAllProjectData] = useState([]);

    useEffect(() => {
        fetch("./asset/project-data/projects.json")
            .then((res) => res.json())
            .then((data) => {
                setAllProjectData(data);
            });
    }, []);
    return (
        <>
            <div
                className={`flex justify-center mt-4 mb-8 font-medium text-3xl md:text-5xl ${styles.glow_text}`}
            >
                Projects
            </div>
            {allProjectData.length
                ? allProjectData.map((project) => (
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
                                  <button>see more</button>
                              </div>
                          </div>
                      </div>
                  ))
                : null}
        </>
    );
};

export default Projects;
