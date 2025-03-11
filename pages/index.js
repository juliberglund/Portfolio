import React, { useContext, useEffect } from "react";
import { PortfolioContext } from "@/contexts/PortfolioContext";
import ThemeSwitcher from "@/components/ThemeSwitcher";

// const projects = [
//   {
//     id: "1",
//     title: "Project One2",
//     description: "This is my pokemon project",
//     tech: ["React", "Tailwind CSS"],
//     link: "https://pokemon-one-bay.vercel.app/",
//     image: "/project1.jpg",
//   },
//   {
//     id: "2",
//     title: "Project Two",
//     description: "hhh.",
//     tech: ["Next.js", "DaisyUI"],
//     link: "https://example.com/project-two",
//     image: "/project2.jpg",
//   },
//   {
//     id: "3",
//     title: "Project Three",
//     description: "And another demo project for testing.",
//     tech: ["Next.js", "DaisyUI", "Javascript"],
//     link: "https://example.com/project-three",
//     image: "/project3.jpg",
//   },
// ];

export default function Home() {
  const { techSkills, projects } = useContext(PortfolioContext);

  console.log(projects);

  return (
    <div className="flex flex-col min-h-screen">
      <section className="navbar bg-base-300 shadow-md  p-0 custom-navbar">
        <section className="flex w-full items-center justify-between">
          <ul className="menu menu-horizontal flex items-center">
            <li className="flex items-center">
              <p>Contact:</p>
            </li>
            <li>
              <a href="https://github.com/juliberglund">
                <img
                  src="/github.png"
                  alt="Github"
                  className="w-7 h-7 invert-logo"
                />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/julia-b-692070202/">
                <img src="/linkedin.png" alt="Linkedin" className="w-7 h-7" />
              </a>
            </li>
          </ul>
          <div className="flex">
            <ThemeSwitcher />
            <a href="/admin" className="ml-5">
              <img
                src="/admin-icon.png"
                alt="Admin"
                className="w-7 h-7 mr-3 invert-logo"
              />
            </a>
          </div>
        </section>
      </section>

      <section className="hero bg-base-200 pt-10">
        <div className="hero-overlay  bg-base-200 mt-12"></div>
        <div className="hero-content flex flex-col md:flex-row items-center text-center md:text-left">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl font-bold">Hi, I'm Julia</h1>
            <p className="mb-5 ml-1 text-lg font-semibold">
              I’m a{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
                front-end developer
              </span>
              .
            </p>
          </div>

          <div className="md:ml-10">
            <div className="p-1 bg-gradient-to-tr from-purple-500 via-pink-900 to-blue-500 rounded-full">
              <img
                src="/profile.jpg"
                alt="Robin's Profile"
                className="w-48 h-48 rounded-full shadow-lg object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto p-4 max-w-6xl">
        <section className="my-8 text-center mb-20">
          <h2 className="text-3xl font-semibold">My Tech Skills</h2>
          <div className="flex flex-wrap gap-4 mt-4 justify-center">
            {techSkills.map((skill, index) => (
              <div key={index} className="mt-4">
                <img
                  src={skill.url}
                  alt={skill.name}
                  className={
                    skill.url == "/github.png"
                      ? "w-16 h-16 object-contain rounded-full mx-3 invert-logo"
                      : "w-16 h-16 object-contain rounded-full mx-3"
                  }
                />
                <p className="text-center text-xs mt-1">{skill.name}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center mb-20 mt-8">
          <h2 className="text-3xl font-semibold mb-12">My Projects</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card card-compact bg-base-300 shadow-xl mx-auto w-80 block"
              >
                {project.image && (
                  <figure>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-48 w-full object-cover"
                    />
                  </figure>
                )}
                <div className="card-body">
                  <h2 className="card-title">{project.title}</h2>
                  <p>{project.description}</p>

                  <div className="card-actions justify-end mt-5">
                    {project.tech.map((tech, index) => (
                      <div key={index} className="badge badge-secondary">
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
      <footer className="footer footer-center bg-base-200 text-base-content p-4 fixed bottom-0">
        <aside>
          <p>Copyright © 2025 - All right reserved by Julia Berglund</p>
        </aside>
      </footer>
    </div>
  );
}
