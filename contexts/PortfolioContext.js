import { createContext, useState, useEffect } from "react";

export const PortfolioContext = createContext();

const startingProjects = [
  {
    id: 1,
    title: "Arduino Projects",
    subtitle: "Capstone Project",
    features: [
      "Scheduled & Manual Feed",
      "Temperature Control",
      "Water Level Control",
      "Drainage System",
      "DO, O2, Temp, PH, and TDS monitoring",
      "Accessible Via Mobile App",
    ],
    images: ["/pokemon.jpg", "/profile.jpg", "/project1.jpg", "/project2.jpg"],
  },
  {
    id: 2,
    title: "Project 2",
    subtitle: "Example Title",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    images: ["/proj2-1.jpg", "/proj2-2.jpg", "/proj2-3.jpg", "/proj2-4.jpg"],
  },
  {
    id: 3,
    title: "Project 3",
    subtitle: "Another Cool Thing",
    features: ["Nice UI", "React Hooks", "API integration"],
    images: ["/proj3-1.jpg", "/proj3-2.jpg", "/proj3-3.jpg", "/proj3-4.jpg"],
  },
];

const startingTechSkills = [
  { name: "React", url: "/react.png" },
  { name: "JavaScript", url: "/javascript.png" },
  { name: "Tailwind CSS", url: "/tailwind.png" },
];

export default function PortfolioProvider({ children }) {
  const [projects, setProjects] = useState(startingProjects);
  const [techSkills, setTechSkills] = useState(startingTechSkills);

  useEffect(() => {
    const storedProjects = localStorage.getItem("projects");
    if (storedProjects && JSON.parse(storedProjects).length > 0) {
      setProjects(JSON.parse(storedProjects));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    const storedTechSkills = localStorage.getItem("techSkills");
    if (storedTechSkills && JSON.parse(storedTechSkills).length > 0) {
      setTechSkills(JSON.parse(storedTechSkills));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("techSkills", JSON.stringify(techSkills));
  }, [techSkills]);

  function addProject(project) {
    setProjects([...projects, project]);
  }

  function updateProject(updatedProject) {
    setProjects(
      projects.map((project) =>
        project.id === updatedProject.id ? updatedProject : project
      )
    );
  }

  function deleteProject(id) {
    setProjects(projects.filter((project) => project.id !== id));
  }

  function addTechSkill(skill) {
    setTechSkills([...techSkills, skill]);
  }

  function deleteTechSkill(skillName) {
    setTechSkills(techSkills.filter((skill) => skill.name !== skillName));
  }

  return (
    <PortfolioContext.Provider
      value={{
        projects,
        addProject,
        updateProject,
        deleteProject,
        techSkills,
        addTechSkill,
        deleteTechSkill,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}
