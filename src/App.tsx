import "./App.css";
import resumeJson from "./data/resume.json";
import { Section } from "./components";
import { WorkBlock, VolunteerBlock, EducationBlock } from "./features";
import Balancer from "react-wrap-balancer";
import { groupSkillsByFirstKeyword } from "./util/groupSkillsByFirstKeyword";
import { SkillsBlock } from "./features/SkillBlock";
import { GitHubButton } from "./features/GitHubButton";
import { DownloadButton } from "./features/DownloadButton";

function App() {
  const groupedSkills = groupSkillsByFirstKeyword(resumeJson.skills!);

  return (
    <div
      id="stage"
      className="page:flex print:flex page:justify-center page:py-16 print:p-0 bg-stage"
    >
      <div
        id="toolbar"
        className="print:hidden fixed z-10 bottom-0 page:top-0 right-0 p-4"
      >
        <GitHubButton />
        <DownloadButton />
      </div>
      <main
        id="resume"
        className="page:w-[8.5in] print:w-[8.5in] page:h-[11in] print:h-[11in] p-8 sm:p-16 flex-col page:flex print:flex screen:drop-shadow-lg bg-paper"
      >
        <header>
          <div className="sm:flex flex-row">
            <div>
              <h1 className="text-4xl font-bold font-display text-accent tracking-tighter">
                {resumeJson.basics.name}
              </h1>
            </div>
            <div className="mt-2 sm:mt-0 flex-1 sm:text-right text-xs">
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
          <h2 className="text-xl my-3 mb-6">
            <Balancer>{resumeJson.basics.label}</Balancer>
          </h2>
        </header>
        <main
          id="body"
          className="sm:grid grid-cols-9 gap-6 auto-rows-min flex-1"
        >
          <div id="col-left" className="col-span-6">
            <Section id="work" title="Work Experience">
              {resumeJson.work!.map((position) => (
                <WorkBlock
                  key={`position-${position.name}-${position.position}`}
                  position={position}
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
          <div id="col-right" className="col-span-3">
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
          </div>
        </main>
        <footer className="py-4 mt-4 sm:mt-0 page:py-0 print:py-0 sm:flex flex-row items-end text-xs text-center">
          <div className="flex-1 page:text-left print:text-left">
            <p>
              <Balancer>
                This resume is a printable web app built using React, Vite, and
                Tailwind.
              </Balancer>
            </p>
            <p>
              <a href="https://resume.jordanloeser.com">
                resume.jordanloeser.com
              </a>
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
