import { useRef } from "react";
import { Globe } from "../components/globe";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Parag Dakhane</p>
            <p className="subtext">
              I engineer autonomous AI agents and vector-driven search systems so users don't have to think as hard.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2 relative overflow-hidden flex flex-col justify-center">
          <img src="assets/grid.png" alt="grid" className="w-full h-full object-cover absolute inset-0 opacity-[0.15]" />
          <div className="flex flex-col items-center justify-center w-full h-full relative z-10 p-6">
            <p className="headtext text-center mb-6">
              Core Expertise
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              {['AI Agents', 'RAG Pipelines', 'FastAPI Backend', 'React Web Apps', 'Vector DBs', 'Cloud Deployments'].map((skill, i) => (
                <div key={i} className="px-5 py-2.5 bg-black/40 border border-white/20 rounded-xl text-sm font-medium text-gray-300 backdrop-blur-md hover:border-white/50 hover:text-white transition-all hover:-translate-y-1 cursor-pointer">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm based in Pune, India (IST), and open to work worldwide.
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center text-lg font-semibold">
              A Glimpse Into My Skillset!
            </p>

            <a
              href="ParagDakhaneResume_AI.pdf"
              download
              className="flex items-center gap-2 px-6 py-2 rounded-xl border bg-black border-white/40 backdrop-blur-sm hover:scale-105 transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                />
              </svg>
              Download Resume
            </a>
          </div>
        </div>

        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText">Tech Stack</p>
            <p className="subtext">
              I specialize in modern frameworks like React and FastAPI, along with GenAI tools and cloud infrastructure to build robust, scalable AI applications.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
