import React from "react";

type Props = {};

function CoDesignFrameworks({}: Props) {
  return (
    <div className="flex flex-col mx-auto items-start md:max-w-5xl p-10">
      <h1 className="text-4xl font-bold text-black]">Co-Design Frameworks</h1>
      <div className="flex flex-col space-y-5 pt-10">
        <h2 className="text-xl font-semibold text-gray-900">
          What is it about?
        </h2>
        <p className="text-base text-balance text-gray-600">
          Co-design is a collaborative approach to design that involves multiple
          stakeholders in the design process. Its a flexible roadmap that guides
          the implementing agencies before and during the implementation
          progress. It outlines the stages, methods, and tools that can be used
          to involve stakeholders in a meaningful way.
        </p>
      </div>
      <div className="flex flex-col mt-10 space-y-5">
        <h1 className="text-4xl font-semibold text-gray-900">
          Types of Frameworks
        </h1>
        <ul className="list-disc pl-5 space-y-3">
          <li className="text-base text-gray-800">
            Solution Based Program Design
          </li>
          <li className="text-base text-gray-800">LFA/TOC</li>
          <li className="text-base text-gray-800">M&E Framework</li>
        </ul>
      </div>
      <div className="flex flex-col mt-10 space-y-5">
        <h1 className="text-4xl font-bold text-gray-900">
          Solution Based Program Design
        </h1>
        <h1 className="text-xl font-semibold text-gray-800">How we do?</h1>
        <ul className="list-disc pl-5 space-y-3">
          <li className="text-base text-gray-600">
            Facilitate brainstorming sessions: Organize workshops where both our
            team and the implementing agency team can brainstorm potential
            solutions and program strategies. This encourages creativity,
            leverages diverse perspectives, and builds a sense of joint
            ownership.
          </li>
          <li className="text-base text-gray-600">
            Establish Effective Learning Systems: To create robust learning and
            development platform that drive continuous improvement.
          </li>
          <li className="text-base text-gray-600">
            Utilize their expertise: Integration of our experiences and learning
            with the implementing agency that is likely to have experiences
            running similar programs in the past. Seeking out best practices,
            potential logistical challenges, and what has worked well in the
            past work.
          </li>
          <li className="text-base text-gray-600">
            Establish clear roles: While co-designing, ensure both our team and
            the implementing agency understand their roles and responsibilities.
            This avoids confusion and ensures everyone contributes effectively.
          </li>
          <li className="text-base text-gray-600">
            Offer training and support: If there are any gaps in the
            implementing agencies capacity for co-design methods, provide
            training and support to equip them with the necessary skills and
            tools.
          </li>
          <li className="text-base text-gray-600">
            Maintain open communication: Regularly communicate project updates,
            share drafts for feedback, and encourage open discussion throughout
            the co-design process.
          </li>
          <li className="text-base text-gray-600">
            Pilot test together: Develop a pilot program together and involve
            the implementing agency in its implementation and evaluation. This
            allows for real-world testing of the program design and
            identification of areas for refinement.
          </li>
        </ul>
      </div>
      <div className="flex flex-col mt-10 space-y-5">
        <h1 className="text-4xl font-bold text-gray-900">SLFA/TOC</h1>
        <h1 className="text-xl font-semibold text-gray-800">
          Logical Framework Approach
        </h1>
        <p className="text-base text-balance text-gray-600">
          Its a systematic and analytical process used for objectives-goal
          oriented project planning and management. This framework connects
          various project components like goals, objectives, activities,
          outputs, and outcomes. Essentially, it ensures everything aligns to
          achieve the desired project impact.
        </p>
      </div>
      <div className="flex flex-col mt-10 space-y-5">
        <h1 className="text-xl font-semibold text-gray-800">
          Theory of Change
        </h1>
        <p className="text-base text-balance text-gray-600">
          Its essentially a roadmap that explains how and why a program is
          expected to lead to positive change. It maps out the causal
          relationships between a programs interventions and its desired
          long-term goals. It is also an on-going process of discussion-based
          analysis and learning that produces powerful insights to support
          programme design, strategy, implementation, evaluation and impact
          assessment, communicated through diagrams and narratives which are
          updated at regular intervals.
        </p>
      </div>
      <div className="flex flex-col mt-10 space-y-5">
        <h1 className="text-4xl font-bold text-gray-800">M&E Framework</h1>
        <h1 className="text-xl font-semibold text-gray-800">
          Financial Planning Consulting
        </h1>
        <p className="text-base text-balance text-gray-600">
          <span className="font-semibold text-base">
            Define Your Program Goals and Objectives:
          </span>{" "}
          Defining the program Goals and Objectives is the foundation of M&E
          framework. Identify what the program is trying to achieve. What
          problem are to be addressed? What positive changes are expected?
        </p>
        <p className="text-base text-balance text-gray-600">
          <span className="font-semibold text-base">
            Choose M&E Indicators:
          </span>{" "}
          Identify Indicators and Key Performance Indicators that are specific,
          measurable and trackable. They should be clear, relevant, and
          sensitive to change caused by the program.
        </p>
        <p className="text-base text-balance text-gray-600">
          <span className="font-semibold text-base">
            Develop a Data Collection Plan and Tools:
          </span>{" "}
          Identify The planning determine how and when the data for each
          indicator to be collected. The Tool is by what means the data will be
          collected? This will involve surveys, interviews, focus group
          discussions, data analysis from existing sources, or program records.
        </p>
      </div>
    </div>
  );
}

export default CoDesignFrameworks;
