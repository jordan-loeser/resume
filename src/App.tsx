import Balancer from "react-wrap-balancer";
import "./App.css";
import { Section } from "./components";
import resumeJson from "./data/resume.json";
import { EducationBlock, VolunteerBlock, WorkBlock } from "./features";
import { DownloadButton } from "./features/DownloadButton";
import { GitHubButton } from "./features/GitHubButton";
import { SkillsBlock } from "./features/SkillBlock";
import { groupSkillsByFirstKeyword } from "./util/groupSkillsByFirstKeyword";

function App() {
  const groupedSkills = groupSkillsByFirstKeyword(resumeJson.skills!);

  return (
    <div
      id="stage"
      className="bg-stage page:flex page:justify-center page:py-16 print:flex print:p-0"
    >
      <div
        id="toolbar"
        className="fixed bottom-0 right-0 z-10 p-4 page:top-0 print:hidden"
      >
        <GitHubButton />
        <DownloadButton />
      </div>
      <main
        id="resume"
        className="flex-col bg-paper p-8 sm:p-16 screen:drop-shadow-lg page:flex page:h-[11in] page:w-[8.5in] page:pb-12 print:flex print:h-[11in] print:w-[8.5in]"
      >
        <header>
          <div className="flex-row sm:flex">
            <div>
              <h1 className="font-display text-4xl font-bold tracking-tighter text-accent">
                {resumeJson.basics.name}
              </h1>
            </div>
            <div className="mt-2 flex-1 text-xs sm:mt-0 sm:text-right">
              <p>
                <a href={resumeJson.basics.url}>
                  {resumeJson.basics.url.replace(/https?:\/\//i, "")}
                </a>
              </p>
              <p>
                <a href={`mailto:${resumeJson.basics.email}`}>
                  {resumeJson.basics.email}
                </a>
              </p>
              <p>{resumeJson.basics.phone}</p>
            </div>
          </div>
          <h2 className="my-3 mb-6 text-xl">
            <Balancer>{resumeJson.basics.label}</Balancer>
          </h2>
        </header>
        <main
          id="body"
          className="flex-1 auto-rows-min grid-cols-5 gap-x-5 sm:grid"
        >
          <div id="col-left" className="col-span-3">
            <Section id="work" title="Work Experience">
              {resumeJson.work!.map((position) => (
                <WorkBlock
                  key={`position-${position.name}-${position.position}`}
                  position={position}
                />
              ))}
            </Section>
          </div>
          <div id="col-right" className="col-span-2">
            <Section id="skills" title="Skills">
              {Object.entries(groupedSkills).map(([keyword, skills], i) => (
                <SkillsBlock
                  key={`skills-${i}-${keyword}`}
                  keyword={keyword}
                  skills={skills}
                />
              ))}
            </Section>
            <Section id="education" title="Education">
              {resumeJson.education.map((experience) => (
                <EducationBlock
                  key={`education-${experience.institution}-${experience.area}`}
                  experience={experience}
                />
              ))}
            </Section>
            <Section id="volunteer" title="Community Leadership">
              {resumeJson.volunteer!.map((position) => (
                <VolunteerBlock
                  key={`position-${position.organization}-${position.position}`}
                  position={position}
                />
              ))}
            </Section>
          </div>
        </main>
        <footer className="mt-4 flex-row items-end py-4 text-center text-xs text-gray-500 sm:mt-0 sm:flex page:py-0 print:py-0">
          <div className="flex-1">
            <p>
              <Balancer>
                Pssst. This isn't just a resume — it's a printable web app built
                with React, Vite, and Tailwind. See it live at{" "}
                <a
                  className="hover:text-accent"
                  href="https://resume.jordanloeser.com"
                >
                  resume.jordanloeser.com
                </a>
                .
              </Balancer>
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
