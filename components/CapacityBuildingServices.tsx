import React from "react";

type Props = {};

function CapacityBuildingServices({}: Props) {
  return (
    <div className="flex flex-col mx-auto items-start md:max-w-5xl p-10 ">
      <div className="flex flex-col space-y-5">
        <h1 className="text-4xl font-bold text-black">CAPACITY BUILDING</h1>
        <h2 className="text-3xl font-semibold text-gray-900">
          TYPES OF TRAINING & WORKSHOP
        </h2>
        <p className="text-xl text-gray-800">
          We provide training and workshops in the following areas.
        </p>
        <ul className="list-disc pl-5 space-y-3">
          <li className="text-base text-gray-600">
            M&E - Training and Workshop
          </li>
          <li className="text-base text-gray-600">
            Leadership Training & Development
          </li>
          <li className="text-base text-gray-600">Lean Six Sigma</li>
        </ul>
      </div>
      <div className="flex flex-col mt-10 space-y-5">
        <h1 className="text-4xl font-bold text-gray-800">WHY ?</h1>
        <p className="text-base text-gray-600">
          Capacity Building is a conceptual approach to improve the knowledge
          and skills of an individual and teams for institutional or
          organizational development through training and workshops. The
          approaches focus on understanding the challenges to achieve
          development goals while enhancing their abilities to achieve
          measurable and sustainable results. It means much more than
          theoretical training as it includes practical learnings through
          contextualized activities. Capacity-building methods and techniques
          result in increased abilities of individuals, groups, and
          organizations to define and make strategic plans in align to their
          objectives and goals. It helps them to perform core functions, solve
          problems, and deal with development needs within a local context and
          in a sustainable manner.
        </p>
      </div>
      <div className="flex flex-col mt-10 space-y-5">
        <h1 className="text-4xl font-bold text-gray-800">OBJECTIVES</h1>
        <ul className="list-disc pl-5 space-y-3">
          <li className="text-base text-gray-600">
            <span className="font-semibold">
              Cultivate Competent and Motivated Teams:
            </span>{" "}
            To nurture motivated individual and teams who are willing to learn
            and grow.
          </li>
          <li className="text-base text-gray-600">
            <span className="font-semibold">
              Establish Effective Learning Systems:
            </span>{" "}
            To create robust learning and development platform that drive
            continuous improvement.
          </li>
          <li className="text-base text-gray-600">
            <span className="font-semibold">
              Enhance Knowledge and Awareness:
            </span>{" "}
            Strengthen understanding and use of evidence and results-based
            approaches.
          </li>
          <li className="text-base text-gray-600">
            <span className="font-semibold">Provide Technical Expertise:</span>{" "}
            Offer technical insights for designing social programs, frameworks,
            tools, and community engagement methods.
          </li>
          <li className="text-base text-gray-600">
            <span className="font-semibold">Develop Practical Skills:</span>{" "}
            Build skills in project planning, implementation, and evaluation,
            for strengthened social impact.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CapacityBuildingServices;
