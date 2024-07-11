import React from "react";

import Image from "next/image";
import { photo1, photo2, photo3, photo4, john } from "@/images";

type Props = {};

function OurTeam({}: Props) {
  return (
    <div className="flex flex-col mt-10 bg-gray-950">
      <h1 className="text-4xl mx-auto font-bold items-center p-10 uppercase text-white">
        Our Team
      </h1>
      <div className="grid md:grid-cols-2 mx-5 my-10">
        <div className="grid grid-cols-12 m-2 p-2 items-center bg-gray-900 rounded-2xl">
          <Image
            src={photo1}
            alt="Photo"
            width={500}
            height={500}
            className="rounded-3xl border border-gray-500 col-span-4 h-80 "
          />
          <div className="col-span-8 p-3 items-center">
            <h1 className="ourteamH">S Kapthianmuan Ngaihte </h1>
            <h1 className="ourteamH text-gray-500">Founder & Director</h1>
            <p className="ourteamP">
              An alumnus of TISS, highly motivated and dedicated social
              development practitioner. Also, a member of Association of
              Professional Social Workers and Development Practitioners
              (APSWDP). Driven by an unwavering passion for transparency,
              accountability and evidence, He aspire to transform the
              socio-economic development ecosystem in North East India through
              Capacity Building and Handholding Support in the verticals of
              Program Management, M&E, Assessments and Research.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12 m-2 p-2 items-center bg-gray-900 rounded-2xl">
          <Image
            src={photo2}
            alt="Photo"
            width={500}
            height={500}
            className="rounded-2xl border border-gray-500 mt-5 col-span-4 h-80 "
          />
          <div className="col-span-8 p-3 items-center">
            <h1 className="ourteamH">Lalhmangaih Hauzel </h1>
            <h1 className="ourteamH text-gray-500">Chairman of Board</h1>
            <p className="ourteamP ">
              He brings a wealth of experience, skills and passion to the table.
              His 15+ year career has been a testament to driving transformative
              change across diverse industries, from healthcare, manufacturing,
              insurance, banking & finance, IT and aerospace & defence. His
              skills and expertise span across Strategic Planning & Execution,
              Change Management, Agile Leadership, LEAN Six Sigma, Risk
              Management, Leadership Coaching, etc resulting in significant cost
              savings via process, operational and business improvements
              projects for leading organizations like Syntel, Atos and Tata
              Aerospace & Defence.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12 m-2 p-2 items-center bg-gray-900 rounded-2xl">
          <Image
            src={john}
            alt="Photo"
            width={500}
            height={500}
            className="rounded-2xl border border-gray-500 mt-5 col-span-4 h-80 "
          />
          <div className="col-span-8 p-3 items-center">
            <h1 className="ourteamH">John Pautanlian Guite</h1>
            <h1 className="ourteamH text-gray-500">Business Strategic Lead</h1>
            <p className="ourteamP ">
              With a background in Business Administration and a passion for
              innovation, he thrives in dynamic environments, driving growth and
              practical solutions. His journey spans from start-up ecosystems to
              reputable organizations such as IGGL, AIESEC, and PanaceaX. By
              blending fresh insights with hands-on experience, he focuses on
              developing sustainable and impactful strategies. Ready to lead and
              inspire, he brings a unique perspective to every challenge,
              ensuring measurable success and lasting impact.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12 m-2  p-2 items-center bg-gray-900 rounded-2xl">
          <Image
            src={photo3}
            alt="Photo"
            width={500}
            height={500}
            className="rounded-2xl border border-gray-500 mt-5 col-span-4 h-80 "
          />
          <div className="col-span-8 p-3 items-center">
            <h1 className="ourteamH">Shimtilang Kharsunai </h1>
            <h1 className="ourteamH text-gray-500">Research Assistant</h1>
            <p className="ourteamP ">
              Shimtilang Kharsunai, a Research Assistant with a Master degree in
              Social work from North Eastern Hill university, Tura Campus.
              Shimti showcases a profound expertise in site assessment with
              impeccable communication skills. The passion for grounded
              exploration and research to bring in evidences in contribution to
              the social development has been her strength.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12 m-2 p-2 items-center bg-gray-900 rounded-2xl">
          <Image
            src={photo4}
            alt="Photo"
            width={500}
            height={500}
            className="rounded-2xl border border-gray-500 mt-5 col-span-4 h-80 "
          />
          <div className="col-span-8 p-3 items-center">
            <h1 className="ourteamH">Janai Mary Donmai</h1>
            <h1 className="ourteamH text-gray-500">Research Assistant</h1>
            <p className="ourteamP">
              Janai Mary Nadon is a Research Assistant with a Master’s in Social
              Work (MSW) from Martin Luther Christian University Shillong. Janai
              is passionate about research, enjoys exploring the field, and
              finds fulfillment in learning something new every day. Her
              interest lies in making a positive impact through community
              development initiatives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
