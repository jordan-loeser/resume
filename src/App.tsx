import "./App.css";
import resumeJson from "./data/resume.json";
import { groupConsecutivePositionsByKey } from "./util/groupConsecutiveExperiences";
import { VolunteerPosition, WorkPosition } from "./types";
import { SectionHeader, GroupedContentWithTitle } from "./bits";
import { WorkBlock, VolunteerBlock, EducationBlock } from "./components";

function App() {
  const groupedWorkExperiences = groupConsecutivePositionsByKey<WorkPosition>(
    resumeJson.work!,
    "name"
  );

  const groupedVolunteerExperiences =
    groupConsecutivePositionsByKey<VolunteerPosition>(
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
        className="page:w-[8.5in] page:h-[11in] p-8 sm:p-16 sm:grid grid-cols-6 gap-3 auto-rows-min bg-white "
      >
        <header className="col-span-full">
          <div className="flex flex-row">
            <section>
              <h1 className="text-4xl font-bold font-display">
                {resumeJson.basics.name}
              </h1>
            </section>
            <section className="flex-1 text-right text-gray-400  text-xs font-display">
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
          <h2 className="text-xl my-6">{resumeJson.basics.label}</h2>
        </header>
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
      </main>
    </div>
  );
}

export default App;
