import "./App.css";
import resumeJson from "./data/resume.json";
import { groupConsecutivePositionsByKey } from "./util/groupConsecutiveExperiences";
import { VolunteerPosition, WorkPosition } from "./types";
import { SectionHeader, ContentWithSideHeader } from "./bits";
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
        className="page:w-[8.5in] page:h-[11in] sm:grid grid-cols-6 gap-3 auto-rows-min bg-white p-6"
      >
        <header className="col-span-6 flex flex-row mb-10">
          <section>
            <h1 className="text-6xl font-bold serlay">Jordan Loeser</h1>
          </section>
          <section className="flex-1 text-right text-gray-400  text-xs font-display">
            <p>
              <a href="mailto:loeser.jordan@gmail.com">
                loeser.jordan@gmail.com
              </a>
            </p>
            <p>
              <a href="https://jordanloeser.com">jordanloeser.com</a>
            </p>
          </section>
        </header>
        <section id="work" className="col-span-4">
          <SectionHeader>Work Experience</SectionHeader>
          {groupedWorkExperiences.map((group, i) => (
            <ContentWithSideHeader
              key={`work-${i}-${group[0].name}`}
              title={group[0].name}
            >
              {group.map((position) => (
                <WorkBlock
                  key={`position-${position.name}-${position.position}`}
                  position={position}
                />
              ))}
            </ContentWithSideHeader>
          ))}
        </section>
        <section id="volunteer" className="col-span-4">
          <SectionHeader>Volunteer</SectionHeader>
          {groupedVolunteerExperiences.map((group, i) => (
            <ContentWithSideHeader
              key={`volunteer-${i}-${group[0].organization}`}
              title={group[0].organization}
            >
              {group.map((position) => (
                <VolunteerBlock
                  key={`position-${position.organization}-${position.position}`}
                  position={position}
                />
              ))}
            </ContentWithSideHeader>
          ))}
        </section>
        <section id="education" className="row-start-2 col-start-5 col-span-2">
          <SectionHeader>Education</SectionHeader>
          {resumeJson.education.map((experience) => (
            <EducationBlock
              key={`education-${experience.institution}-${experience.area}`}
              experience={experience}
            />
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
