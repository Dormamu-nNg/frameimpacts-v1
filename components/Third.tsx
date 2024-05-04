import Image from "next/image";
import React from "react";
import stories1 from "../public/StoriesCommunitiesHorizontal.jpg";
import stories2 from "../public/GroundingValues 1.jpg";

type Props = {};

export default function Third({}: Props) {
  return (
    <div className="flex flex-col max-w-6xl mx-auto bg-slate-100 items-center justify-center">
      <h1 className=" uppercase text-center p-5 pt-10 text-4xl font-extrabold">
        Business Strategy Operations
      </h1>
      <h2 className="p-5 text-center text-2xl font-semibold  ">
        Unleashing Sustainable Impact through Serving, Learning and Sharing
      </h2>
      <p className="p-5 text-left text-lg">
        FrameImpacts is is a social impact and development frontier agency that
        engages in diverse pivotal activities to foster sustainable social
        development. We champion a collaborative approach, working closely with
        our clients to co-design and strategize programs, conduct rigorous
        social impact assessments, research, and generate data-driven insights
        for informed decision-making.
      </p>
      <h1 className="p-5 font-semibold text-2xl">
        Our comprehensive services include:
      </h1>
      <ul className="list-decimal pl-6">
        <li className="text-lg">
          <span className="font-semibold">Tailored M&E:</span> We assist
          organizations in adopting and strengthening their M&E systems,
          ensuring program effectiveness, transparency, and accountability that
          aligns with their unique goals and objectives.
        </li>
        <li className="text-lg">
          <span className="font-semibold">
            Co-creation of Impactful Solutions:
          </span>
          We foster a collaborative approach to program design and evaluation,
          creating a learning environment that sparks innovative and impactful
          solutions tailored to specific needs.
        </li>
        <li className="text-lg">
          <span className="font-semibold">
            Data-Driven Insights for Sustainable Development:
          </span>
          We provide valid and sophisticated insights from program data,
          enabling informed decision-making that maximizes impact and drives
          sustainable development across Northeast India.
        </li>
        <li className="text-lg">
          <span className="font-semibold">
            Transformative Communication and Storytelling:
          </span>
          We transform complex reports into engaging narratives, helping
          organizations share their stories, garner support, and build positive
          social perceptions that amplify their impact.
        </li>
        <li className="text-lg">
          <span className="font-semibold">
            Capacity Building for Organizational Transformation:
          </span>
          We offer comprehensive capacity-building programs that equip teams
          with the skills and knowledge to conceptualize program design,
          implement social projects, develop outreach and communication
          strategies, form strong partnerships, and assess organizational impact
          for continuous improvement.
        </li>
      </ul>
    </div>
  );
}
