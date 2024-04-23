import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

type Experience = {
  id: number;
  company: string;
  position: string;
  tenure: string;
  description: string[];
};

const experiences = [
  {
    id: 1,
    company: "WNE3",
    position: "Frontend Engineer (Intern)",
    tenure: "Feb. 2024 - Present",
    description: [
      "WNE3 is an early-stage student-led web2.5 company focused on building utilitarian applications of generative Al and Commerce. We are currently working on building our flagship WNE3 Live, The first of its kind platform for generative commerce, that gives users the ability to generate custom products in real-time directly from the search bar.",
    ],
  },
  {
    id: 2,
    company: "Salad & Tartine",
    position: "Web Developer (Intern)",
    tenure: "Oct. 2023 - Dec. 2023",
    description: [
      "Built dynamic, user-friendly website showcasing delectable range of salads, desserts, tartines etc. of the company.",
      "Collaborated closely with a dynamic team to craft captivating user interfaces.",
      "Provided support to the team by handling general administrative tasks as needed.",
    ],
  },
];

function ExperinceItem(props: Experience) {
  return (
    <div className="flex flex-col items-center gap-2">
      <h1 className={`${GeistSans.className} text-black font-bold text-2xl`}>
        {props.company}
      </h1>
      <p className={`${GeistMono.className} text-black text-sm`}>
        {props.position}
      </p>
      <p
        className={`${GeistMono.className} bg-black text-white text-xs py-1 px-4 rounded-full`}
      >
        {props.tenure}
      </p>
      {props.description.length == 1 ? (
        <p className={`${GeistMono.className} text-black pt-4`}>
          {props.description}
        </p>
      ) : (
        <ol className="pt-4 flex flex-col gap-2">
          {props.description.map((desc) => (
            <li
              className={`${GeistMono.className} text-black list-decimal`}
              key={desc}
            >
              {desc}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

export default function Experience() {
  return (
    <section className="bg-[#F6FF92] py-10">
      <div className="flex flex-col items-center gap-6 max-w-[80%] mx-auto">
        <h1 className={`${GeistSans.className} text-black font-bold text-4xl`}>
          WORK EXPERIENCE
        </h1>
        <div className="flex flex-col items-center gap-8">
          {experiences.map((experience) => (
            <ExperinceItem
              key={experience.id}
              id={experience.id}
              company={experience.company}
              position={experience.position}
              tenure={experience.tenure}
              description={experience.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
