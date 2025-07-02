import "./App.css";
import resumeJson from "./data/resume.json";
import { groupConsecutivePositionsByKey } from "./util/groupConsecutiveExperiences";
import { Work, Volunteer } from "./types";
import { SectionHeader } from "./components";
import { WorkBlock, VolunteerBlock, EducationBlock } from "./features";
import Balancer from "react-wrap-balancer";
import { groupSkillsByFirstKeyword } from "./util/groupSkillsByFirstKeyword";
import { SkillsBlock } from "./features/SkillBlock";
import { GitHubButton } from "./features/GitHubButton";
import { DownloadButton } from "./features/DownloadButton";

function App() {
  const groupedWorkExperiences = groupConsecutivePositionsByKey<Work>(
    resumeJson.work!,
    "name"
  );

  const groupedVolunteerExperiences = groupConsecutivePositionsByKey<Volunteer>(
    resumeJson.volunteer!,
    "organization"
  );

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
            <section>
              <h1 className="text-4xl font-bold font-display text-accent tracking-tighter">
                {resumeJson.basics.name}
              </h1>
            </section>
            <section className="mt-2 sm:mt-0 flex-1 sm:text-right text-xs">
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
            </section>
          </div>
          <h2 className="text-xl my-6">
            <Balancer>{resumeJson.basics.label}</Balancer>
          </h2>
        </header>
        <section
          id="body"
          className="sm:grid grid-cols-5 gap-4 auto-rows-min flex-1"
        >
          <div id="col-left" className="col-span-5">
            <section id="work">
              <SectionHeader>Work Experience</SectionHeader>
              {/* // md:grid-cols-[1fr_auto] */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-2 sm:gap-4">
                {groupedWorkExperiences.map((group, i) => (
                  <>
                    <div
                      className="col-span-1"
                      key={`work-${i}-${group[0].name}-title`}
                    >
                      <h3 className="text-md font-bold mb-1">
                        {group[0].name}
                      </h3>
                    </div>
                    <div
                      className="col-span-4"
                      key={`work-${i}-${group[0].name}-content`}
                    >
                      {group.map((position) => (
                        <WorkBlock
                          key={`position-${position.name}-${position.position}`}
                          position={position}
                        />
                      ))}
                    </div>
                  </>
                ))}
              </div>
            </section>
          </div>
          <div id="col-right" className="col-start-4 col-span-2 hidden">
            <section id="education" className="mb-6">
              <SectionHeader>Education</SectionHeader>
              {resumeJson.education.map((experience) => (
                <EducationBlock
                  key={`education-${experience.institution}-${experience.area}`}
                  experience={experience}
                />
              ))}
            </section>
            <section id="volunteer" className="mb-6">
              <SectionHeader>Community Leadership</SectionHeader>
              {groupedVolunteerExperiences.map((group, i) => (
                <>
                  <h3
                    className="text-md font-bold mb-1"
                    key={`volunteer-${i}-${group[0].organization}-title`}
                  >
                    <Balancer>{group[0].organization}</Balancer>
                  </h3>
                  <div key={`volunteer-${i}-${group[0].organization}`}>
                    {group.map((position) => (
                      <VolunteerBlock
                        key={`position-${position.organization}-${position.position}`}
                        position={position}
                      />
                    ))}
                  </div>
                </>
              ))}
            </section>
            <section id="skills">
              <SectionHeader>Skills</SectionHeader>
              {Object.entries(groupedSkills).map(([keyword, skills], i) => (
                <SkillsBlock
                  key={`skills-${i}-${keyword}`}
                  keyword={keyword}
                  skills={skills}
                />
              ))}
            </section>
          </div>
        </section>
        <footer className="py-4 mt-4 sm:mt-0 page:py-0 print:py-0 sm:flex flex-row items-end text-xs text-center">
          <section className="flex-1 page:text-left print:text-left">
            <p>
              <Balancer>
                This resume is a web app built using React, Vite, and Tailwind!
              </Balancer>
            </p>
          </section>
          <section className="flex-1 page:text-right print:text-right">
            <p>
              <a href="https://resume.jordanloeser.com">
                resume.jordanloeser.com
              </a>
            </p>
          </section>
        </footer>
      </main>
    </div>
  );
}

export default App;
