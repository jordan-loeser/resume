import "./App.css";
import resumeJson from "./data/resume.json";
import { ResumeSchema } from "@kurone-kito/jsonresume-types";
import Balancer from "react-wrap-balancer";
import { Section } from "./components/Section";

function App() {
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
          <Section
            title="Work Experience"
            positions={(resumeJson as ResumeSchema).work!}
          />
          <Section
            title="Volunteer"
            positions={(resumeJson as ResumeSchema).volunteer!}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
