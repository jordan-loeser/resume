import "./App.css";
import resumeJson from "./data/resume.json";
import { ResumeSchema } from "@kurone-kito/jsonresume-types";
import Balancer from "react-wrap-balancer";
import { parseExperiences } from "./util/parseExperiences";
import { TenureAtCompany } from "./types";
import { parseDateRange } from "./util/parseDateRange";

function App() {
  const experiences = parseExperiences(resumeJson as ResumeSchema);

  return (
    <div className="w-screen h-screen flex justify-center bg-slate-100">
      <main
        id="resume"
        className="grid grid-cols-6 gap-3 auto-rows-min bg-white p-6"
      >
        <header className="col-span-6 flex flex-row">
          <section>
            <h1 className="text-6xl font-bold font-display">
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
        <section id="left" className="col-span-3">
          <section>
            <h2 className="text-lg mb-2">Experience</h2>
            {experiences.map((tenure: TenureAtCompany, i) => (
              <article className="pb-2" key={`tenure-${i}-${tenure.name}`}>
                <h3 className="text-md font-bold">{tenure.name}</h3>
                {tenure.positions.map((position) => {
                  const { position: jobTitle, summary } = position;
                  return (
                    <div className="mb-2 " key={`experience-${jobTitle}`}>
                      <h4 className="text-sm mb-1">
                        {jobTitle}{" "}
                        <span className=" text-gray-500">
                          ({parseDateRange(position)})
                        </span>
                        {/* ({location}) {parseDateRange(position)} */}
                      </h4>
                      {/* <h4 className="flex-1 text-sm leading-5">{company}</h4> */}
                      {summary && (
                        <p className="text-sm font-light leading-4">
                          <Balancer>{summary}</Balancer>
                        </p>
                      )}
                    </div>
                  );
                })}
              </article>
            ))}
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;
