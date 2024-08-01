import "./App.css";
import resumeJson from "./data/resume.json";
import { ResumeSchema } from "@kurone-kito/jsonresume-types";
import Balancer from "react-wrap-balancer";
import { parseExperiences } from "./util/parseExperiences";
import { TenureAtCompany } from "./types";
import { Position } from "./components/Position";

function App() {
  const experiences = parseExperiences(resumeJson as ResumeSchema);

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
        <section id="left" className="col-span-4">
          <section>
            <h2 className="text-xs mb-6 text-gray-500">Work Experience</h2>
            {experiences.map((tenure: TenureAtCompany, i) => (
              <article
                key={`tenure-${i}-${tenure.name}`}
                className="mb-6 grid grid-cols-4 gap-3"
              >
                <div className="col-span-1">
                  <h3 className="text-lg font-bold">{tenure.name}</h3>
                  {/* <h4 className="text-sm text-gray-400">
                    {tenure.positions[0].location}
                  </h4> */}
                  {/* <h4>
                    <span className="text-gray-600">
                      ({tenure.positions[0].location})
                    </span>{" "}
                    <span className="text-gray-400">
                      {parseDateRange(
                        tenure.positions[0].startDate,
                        tenure.positions[0].endDate
                      )}
                    </span>
                  </h4> */}
                </div>
                <div className="col-span-3">
                  {tenure.positions.map((position, j) => (
                    <Position
                      key={`experience-${j}-${position.position}`}
                      position={position}
                    />
                  ))}
                </div>
              </article>
            ))}
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;
