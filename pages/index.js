import React, { useContext, useEffect, useRef } from "react";
import { PortfolioContext } from "@/contexts/PortfolioContext";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import Typewriter from "typewriter-effect";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { useAnimations } from "@react-three/drei";
import "../i18n";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const startingProjects = [
  {
    id: 1,
    title: "NG AUTO",
    subtitle: "Car Dealership Website",
    features: [
      "User authentication with login & registration",
      "Admin panel to add, edit & delete cars",
      "Filter functionality based on brand, price, year, etc.",
      "Responsive car listings with detailed descriptions and images",
      "Multiple pages including workshop info, contact and about us",
      "Clean UI/UX with intuitive navigation",
      "Built using React, Tailwind CSS, and Firebase",
    ],
    images: [
      "/NGAUTO4.png",
      "/NGAUTO3.png",
      "/NGAUTO2.png",
      "/NGAUTO1.png",
      "NGAUTO.png",
    ],
  },
  {
    id: 2,
    title: "Project 2",
    subtitle: "Example Title",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    images: ["/pokemon.jpg", "/profile.jpg", "/project1.jpg", "/project2.jpg"],
  },
  {
    id: 3,
    title: "Project 3",
    subtitle: "Another Cool Thing",
    features: ["Nice UI", "React Hooks", "API integration"],
    images: ["/pokemon.jpg", "/profile.jpg", "/project1.jpg", "/project2.jpg"],
  },
];

export default function Home() {
  const { techSkills, projects } = useContext(PortfolioContext);
  const { t } = useTranslation();

  function Model() {
    const group = useRef();
    const { scene, animations } = useGLTF("/juliaPB.glb"); // Din GLB-fil
    const { actions } = useAnimations(animations, group);

    useEffect(() => {
      // Spela upp första animationen automatiskt
      if (actions && animations.length > 0) {
        actions[animations[0].name]?.play();
      }
    }, [actions, animations]);

    return <primitive ref={group} object={scene} scale={1.5} />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <section className="navbar bg-base-300 shadow-md p-0 custom-navbar">
        <section className="flex w-full items-center justify-between px-4">
          {/* Vänster: Julia */}
          <div className="w-24 h-24 ">
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 300 200"
              preserveAspectRatio="xMidYMid meet"
              className="w-full h-full fill-current"
            >
              <g
                transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)"
                stroke="none"
              >
                <path
                  className=""
                  d="M1290 1523 c-17 -5 -37 -13 -92 -38 -36 -16 -149 -123 -157 -148 -2 -6 -9 -19 -16 -27 -8 -8 -22 -42 -34 -75 -28 -84 -16 -219 25 -295 60 -110 201 -190 335 -190 l31 0 -4 221 c-3 218 -3 221 -27 240 -13 10 -36 19 -52 19 -16 0 -29 5 -29 10 0 6 60 10 160 10 100 0 160 -4 160 -10 0 -5 -14 -10 -30 -10 -19 0 -40 -9 -55 -25 -25 -24 -25 -25 -25 -224 l0 -201 66 37 c59 32 75 36 138 37 113 0 215 -55 301 -164 44 -56 63 -66 37 -20 -9 16 -20 30 -24 30 -5 0 -8 7 -8 16 0 8 -4 12 -10 9 -5 -3 -10 -3 -10 2 0 13 -46 63 -58 63 -6 0 -12 4 -14 9 -7 19 -111 61 -179 72 -57 9 -81 8 -113 -2 -23 -7 -43 -13 -46 -14 -3 0 -15 -6 -27 -13 -31 -17 -33 -5 -27 180 6 154 12 186 36 172 4 -3 8 0 8 5 0 6 8 11 18 11 37 0 56 42 25 55 -21 8 -319 8 -332 0 -5 -3 -12 -1 -16 5 -3 5 5 14 20 20 14 5 28 17 31 25 4 8 12 15 19 15 7 0 16 7 19 16 7 19 -10 44 -29 44 -23 0 -37 26 -21 39 32 27 184 36 253 15 63 -19 78 -12 22 10 -65 27 -173 32 -245 11 -116 -33 -203 -108 -258 -224 -28 -60 -31 -75 -31 -161 0 -78 4 -104 23 -145 15 -33 18 -45 7 -35 -8 9 -24 43 -36 75 -31 88 -24 228 15 305 83 164 263 252 438 215 36 -7 81 -21 98 -30 18 -9 34 -14 37 -12 9 10 -42 36 -97 50 -30 8 -48 17 -39 20 17 7 -160 7 -181 0z"
                />
                <path d="M950 1090 c-3 -76 1 -125 13 -132 6 -4 8 -10 4 -14 -4 -4 -1 -14 5 -22 7 -8 13 -19 14 -26 4 -26 69 -109 103 -132 57 -37 144 -64 203 -63 l53 1 -57 9 c-180 26 -301 160 -327 361 -8 60 -9 61 -11 18z" />
                <path d="M1430 930 c0 -6 7 -10 15 -10 8 0 15 2 15 4 0 2 -7 6 -15 10 -8 3 -15 1 -15 -4z" />
                <path d="M1655 821 c-38 -10 -97 -42 -158 -85 -74 -54 -151 -79 -222 -73 -71 5 -120 28 -199 92 -31 26 -60 45 -62 42 -9 -8 78 -92 109 -105 15 -6 27 -16 27 -22 0 -6 4 -9 9 -5 14 8 25 -35 12 -48 -14 -14 -14 -52 0 -80 25 -48 68 -73 119 -69 60 5 70 7 70 16 0 5 3 7 6 3 12 -11 104 78 104 101 0 9 3 12 6 9 7 -7 39 14 88 57 16 14 55 33 88 42 32 9 56 19 53 23 -6 5 84 30 113 31 9 0 11 -7 7 -19 -4 -13 3 -29 20 -48 15 -15 24 -21 20 -13 -5 12 -4 12 7 -1 7 -8 27 -24 45 -34 31 -18 33 -18 53 0 11 10 20 14 20 9 0 -5 10 -15 21 -23 l22 -13 -21 29 c-38 54 -132 134 -185 159 -60 27 -127 37 -172 25z" />
                <path d="M1405 770 c-18 -8 -17 -9 7 -9 15 -1 30 4 33 9 7 12 -12 12 -40 0z" />
              </g>
            </svg>
          </div>

          {/* Mitten: Navigationslänkar */}
          <ul className="menu menu-horizontal flex items-center space-x-6">
            <li>
              <a href="#home" className="text-lg hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#skills" className="text-lg hover:underline">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="text-lg hover:underline">
                Projects
              </a>
            </li>
          </ul>

          {/* Höger: ThemeSwitcher + Adminikon */}
          <div className="flex items-center">
            <ThemeSwitcher />
            <div className="px-2">
              <LanguageSwitcher />
            </div>
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

      <main className="bg-base-100 px-10 py-20 " id="home">
        <section className="flex flex-col md:flex-row justify-between gap-12">
          {/* Vänstersektion: Presentation */}
          <section className="flex-1">
            <div className="flex items-center gap-4">
              <p className="text-xl">{t("intro.hi")}</p>
              <hr className="w-20 border-blue-400" />
            </div>

            <h2 className="text-4xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
              {t("intro.name")}
            </h2>

            <h1 className="text-2xl mt-4">
              {t("intro.and_im")}{" "}
              <span className="text-blue-400 font-semibold">
                <Typewriter
                  options={{
                    strings: t("intro.roles", { returnObjects: true }), // <-- Viktigt!
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h1>

            <a
              href="/cv.pdf"
              download
              className="inline-block mt-6 px-8 py-4 border-2 border-blue-400 font-light rounded hover:bg-blue-400 hover:text-blue-500 transition"
            >
              {t("intro.downloadCV")}
            </a>

            <div className="mt-8">
              <p className="mb-2 font-semibold">{t("intro.mySocials")}</p>{" "}
              <ul className="flex items-center gap-4">
                <li>
                  <a href="https://github.com/juliberglund" target="_blank">
                    <img
                      src="/github.png"
                      alt="Github"
                      className="w-7 h-7 invert-logo"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/julia-b-692070202/"
                    target="_blank"
                  >
                    <img
                      src="/linkedin.png"
                      alt="Linkedin"
                      className="w-7 h-7"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* Mittensektion: 3D-bild / porträtt */}
          <section className="flex-[1.5] flex justify-center items-center h-[700px]">
            <Canvas>
              <ambientLight intensity={0.5} />
              <directionalLight position={[2, 2, 2]} />
              <Model />
              <OrbitControls enableZoom={false} />
            </Canvas>
          </section>

          {/* Högersektion: Aspirationstext */}
          <section className="flex-1 bg-base-200 p-6 rounded shadow-md flex flex-col justify-center">
            <h3 className="text-xl font-light mb-2 text-blue-400">
              {t("aspiring.aspiring")}
            </h3>
            <h4 className="text-lg font-semibold mb-4">{t("aspiring.role")}</h4>
            <p className="text-sm leading-relaxed mb-4">
              {t("aspiring.description")}
            </p>
            <div className="text-sm italic text-blue-300">
              <Typewriter
                options={{
                  strings: [t("aspiring.quote")],
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  deleteSpeed: 30,
                  pauseFor: 1500,
                }}
              />
            </div>
          </section>
        </section>
      </main>

      <hr className="border-blue-400 w-[80%] mx-auto my-4" />

      <section id="projects" className="px-6 md:px-12 py-20 space-y-24">
        {startingProjects.map((proj, idx) => (
          <div
            key={proj.id}
            className={`flex flex-col md:flex-row ${
              idx % 2 === 1 ? "md:flex-row-reverse" : ""
            } items-center gap-10`}
          >
            {/* Carousel */}
            <div className="w-full md:w-1/3 flex justify-center ">
              <div className="w-full max-w-md outline rounded-lg outline-blue-400">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={20}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  loop
                  className="rounded-lg shadow-lg"
                >
                  {proj.images.map((img, i) => (
                    <SwiperSlide key={i}>
                      <img
                        src={img}
                        alt={`${proj.title} ${i + 1}`}
                        className={`rounded-lg 
                      ${idx === 1 ? "w-auto h-[500px]" : "w-full h-[300px]"}`}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-light text-blue-400 mb-4">
                {t(`projects.project${proj.id}.title`).toUpperCase()}
              </h3>
              <p className="mb-2 font-semibold">
                {t(`projects.project${proj.id}.subtitle`)}
              </p>

              {idx === 1 ? (
                // Projekt 2: text med punkt istället för listan
                <ul className="text-sm text-blue-100 space-y-1 mb-4 list-none pl-0">
                  {t(`projects.project${proj.id}.features`, {
                    returnObjects: true,
                  }).map((f, i) => (
                    <li key={i}>
                      {f}{" "}
                      <span className="ml-1 text-[1.85em] align-middle">•</span>
                    </li>
                  ))}
                </ul>
              ) : (
                // Övriga projekt: vanlig punktlista
                <ul className="list-disc list-inside text-sm text-blue-300 space-y-1 mb-4">
                  {t(`projects.project${proj.id}.features`, {
                    returnObjects: true,
                  }).map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </section>
      <section id="skills" className="py-12 px-6 pb-20">
        {/* Rubrik med blåa streck */}
        <div className="flex items-center justify-center space-x-4 mb-8">
          <hr className="flex-1 h-px border-blue-400" />
          <h2 className="text-2xl font-semibold">{t("skills.sectionTitle")}</h2>
          <hr className="flex-1 h-px border-blue-400" />
        </div>

        {/* Grid med kolumner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {[
            {
              title: "languages",
              list: t("skills.lists.languages", { returnObjects: true }),
            },
            {
              title: "technicalSkills",
              list: t("skills.lists.technicalSkills", { returnObjects: true }),
            },
            {
              title: "tools",
              list: t("skills.lists.tools", { returnObjects: true }),
            },
          ].map((skill, index) => (
            <div
              key={index}
              className="p-6 border border-blue-400 rounded bg-gradient-to-r from-transparent via-transparent to-transparent transition-all duration-1000 ease-in-out hover:from-purple-950 hover:via-blue-600 hover:to-blue-900 hover:border-transparent hover:text-white"
            >
              <h3 className="text-xl font-bold text-blue-400 mb-2">
                {t(`skills.${skill.title}`)}
              </h3>
              <ul className="space-y-1">
                {skill.list.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Andra raden */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "databases",
              list: t("skills.lists.databases", { returnObjects: true }),
            },
            {
              title: "softSkills",
              list: t("skills.lists.softSkills", { returnObjects: true }),
            },
          ].map((skill, index) => (
            <div
              key={index}
              className="p-6 border border-blue-400 rounded bg-gradient-to-r from-transparent via-transparent to-transparent transition-all duration-1000 ease-in-out hover:from-purple-950 hover:via-blue-600 hover:to-blue-900 hover:border-transparent hover:text-white"
            >
              <h3 className="text-xl font-bold text-blue-400 mb-2">
                {t(`skills.${skill.title}`)}
              </h3>
              <ul className="space-y-1">
                {skill.list.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer footer-center bg-base-200 text-base-content p-4 fixed bottom-0">
        <aside>
          <p>{t("footer.copyright")} Julia Berglund</p>
        </aside>
      </footer>
    </div>
  );
}
