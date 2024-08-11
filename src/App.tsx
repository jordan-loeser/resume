import "./App.css";
import resumeJson from "./data/resume.json";
import { groupConsecutivePositionsByKey } from "./util/groupConsecutiveExperiences";
import { Work, Volunteer } from "./types";
import { SectionHeader, GroupedContentWithTitle } from "./bits";
import { WorkBlock, VolunteerBlock, EducationBlock } from "./components";
import Balancer from "react-wrap-balancer";

function App() {
  const groupedWorkExperiences = groupConsecutivePositionsByKey<Work>(
    resumeJson.work!,
    "name"
  );

  const groupedVolunteerExperiences = groupConsecutivePositionsByKey<Volunteer>(
    resumeJson.volunteer!,
    "organization"
  );

  return (
    <div
      id="stage"
      className="bg-slate-100 page:flex page:justify-center page:py-8"
    >
      <main
        id="resume"
        className="page:w-[8.5in] page:h-[11in] p-8 sm:p-16 bg-white flex-col page:flex"
      >
        <header>
          <div className="sm:flex flex-row">
            <section>
              <h1 className="text-4xl font-bold font-display">
                {resumeJson.basics.name}
              </h1>
            </section>
            <section className="mt-2 sm:mt-0 flex-1 sm:text-right text-gray-400 text-xs font-display">
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
          className="sm:grid grid-cols-6 gap-3 auto-rows-min flex-1"
        >
          <div id="col-left" className="col-span-4">
            <section id="work">
              <SectionHeader>Work Experience</SectionHeader>
              {groupedWorkExperiences.map((group, i) => (
                <GroupedContentWithTitle
                  key={`work-${i}-${group[0].name}`}
                  title={group[0].name}
                  titlePosition="left"
                >
                  {group.map((position) => (
                    <WorkBlock
                      key={`position-${position.name}-${position.position}`}
                      position={position}
                    />
                  ))}
                </GroupedContentWithTitle>
              ))}
            </section>
          </div>
          <div id="col-right" className="col-start-5 col-span-2">
            <section
              id="education"
              className="row-start-2 col-start-5 col-span-2 mb-6"
            >
              <SectionHeader>Education</SectionHeader>
              {resumeJson.education.map((experience) => (
                <EducationBlock
                  key={`education-${experience.institution}-${experience.area}`}
                  experience={experience}
                />
              ))}
            </section>
            <section id="volunteer">
              <SectionHeader>Community Leadership</SectionHeader>
              {groupedVolunteerExperiences.map((group, i) => (
                <GroupedContentWithTitle
                  key={`volunteer-${i}-${group[0].organization}`}
                  title={group[0].organization}
                >
                  {group.map((position) => (
                    <VolunteerBlock
                      key={`position-${position.organization}-${position.position}`}
                      position={position}
                    />
                  ))}
                </GroupedContentWithTitle>
              ))}
            </section>
          </div>
        </section>
        <footer className="py-4 mt-4 sm:mt-0 page:py-0">
          <p className="text-gray-400 text-xs text-center page:text-right">
            This resume was built using React, Vite, and Tailwind.
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
