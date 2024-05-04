import OurTeam from "@/components/OurTeam";
import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="flex flex-col">
      <h1 className="text-4xl mx-auto font-bold items-center p-10 uppercase">
        About Us
      </h1>
      <section className="flex">
        <div className="flex flex-col items-start mx-auto max-w-5xl">
          <h1 className="text-2xl font-semibold py-3 px-5 md:px-0">
            Chairman of Board of Directors Message
          </h1>
          <p className="text-xl font-medium py-3 px-5 md:px-0">
            Dear Esteemed Partners and Collaborators,
          </p>
          <p className="aboutP">
            I am thrilled to welcome you to FrameImpacts Pvt. Ltd., an
            innovative consultancy dedicated to catalyzing transformative change
            in Northeast India. As Chairman of the Board, I take immense pride
            in our vision to empower local NGOs and development agencies with
            data-driven insights and pioneering M&E practices, among other
            services.
          </p>
          <p className="aboutP">
            Our team, committed to excellence and hard work, stands ready to
            collaborate with you on initiatives that drive sustainable impact.
            We specialize in co-designing impactful programs, conducting
            rigorous social impact assessments, and providing data-driven
            insights for informed decision-making.
          </p>
          <p className="aboutP">
            At Frame Impacts, we offer tailored M&E system strengthening,
            co-creation of impactful solutions, transformative communication,
            and storytelling, along with capacity building for organizational
            and entrepreneurial transformation. Our goal is to be your trusted
            partner on the journey to sustainable development in Northeast India
            and beyond.
          </p>
          <p className="aboutP">
            I invite you to explore our comprehensive consulting services and
            experience firsthand the dedication and credibility of our team.
            Together, lets create a brighter future for the region. We eagerly
            anticipate the opportunity to collaborate with you.
          </p>
          <p className="aboutP">Best Regards,</p>
        </div>
      </section>
      <section id="ourteam">
        <OurTeam />
      </section>
    </div>
  );
}
