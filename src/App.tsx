import "./App.css";
import resumeJson from "./data/resume.json";
import Balancer from "react-wrap-balancer";
import { groupConsecutiveExperiences } from "./util/groupConsecutiveExperiences";
import {
  educationToExperience,
  volunteerPositionToExperience,
  workPositionToExperience,
} from "./util/mapDataToExperience";
import { GroupOfExperiences } from "./components/GroupOfExperiences";
import { Experience } from "./components/Experience";

function App() {
  const workExperiences = groupConsecutiveExperiences(
    resumeJson.work!.map(workPositionToExperience)
  );

  const volunteerExperiences = groupConsecutiveExperiences(
    resumeJson.volunteer!.map(volunteerPositionToExperience)
  );

  const educationExperiences = resumeJson.education!.map(educationToExperience);

  return (
    <div className="w-screen h-screen flex justify-center bg-slate-100 ">
      <main
        id="resume"
        className="grid grid-cols-6 gap-3 auto-rows-min bg-white p-6"
      >
        <header className="col-span-6 flex flex-row">
          <section>
            <h1 className="text-6xl font-bold serlay">
              Jordan
              <br />
              Loeser
            </h1>
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
        <section id="summary" className="col-span-full text-md mb-3">
          <Balancer ratio={0.25}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Balancer>
        </section>
        <section id="work" className="col-start-3 col-span-4">
          <h2 className="text-xs mb-6 text-gray-500">Work Experience</h2>
          {workExperiences.map((group, i) => (
            <GroupOfExperiences
              key={`group-${i}-${group.entity}`}
              group={group}
            />
          ))}
        </section>
        <section id="volunteer" className="col-start-3 col-span-4">
          <h2 className="text-xs mb-6 text-gray-500">Volunteer</h2>
          {volunteerExperiences.map((group, i) => (
            <GroupOfExperiences
              key={`group-${i}-${group.entity}`}
              group={group}
            />
          ))}
        </section>
        <div id="right" className="col-span-2 row-start-1 ">
          <h2 className="text-xs mb-6 text-gray-500">Education</h2>
          {educationExperiences.map((experience, i) => (
            <Experience
              key={`experience-${i}-${experience.title}`}
              experience={experience}
            />
          ))}
          {/* <EducationSection
            title="Education"
            experiences={(resumeJson as ResumeSchema).education!}
          /> */}
        </div>
      </main>
    </div>
  );
}

export default App;
