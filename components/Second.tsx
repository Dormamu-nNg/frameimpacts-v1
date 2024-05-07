import React from "react";
import Image from "next/image";
import { mission, vision } from "@/images";

type Props = {};

export default function Second({}: Props) {
  return (
    <div className="flex flex-col lg:flex-row justify-between pt-10 mx-auto max-w-6xl ">
      <div className="flex flex-col items-center p-2">
        <p className="font-bold pt-5 text-4xl uppercase text-[#F02D3A]">
          Vision
        </p>
        <div className="flex border-2 border-[#9899A6] p-3 rounded-xl">
          <Image
            className="rounded-xl"
            src={vision}
            alt="Picture of the author"
            width={200}
            height={200}
            // blurDataURL="data:..." automatically provided
            // placeholder=" this is text" // Optional blur-up while loading
          />

          <p className="p-2 text-[#565656] font-medium text-wrap text-base mx-10">
            Transforming India’s North East Region social development landscape
            through data-driven insights, monitoring & evaluation tools, and
            innovative practices.
          </p>
        </div>
        {/* <p className=" bg-black/50 bg-cover">Read more..</p> */}
      </div>
      <div className="flex flex-col items-center p-2">
        <p className="font-bold pt-5 text-4xl uppercase text-[#F02D3A]">
          Mission
        </p>
        <div className="flex border-2 border-[#9899A6] p-3 rounded-xl">
          <Image
            className="rounded-xl"
            src={mission}
            alt="Picture of the author"
            width={200}
            height={200}
            // blurDataURL="data:..." automatically provided
            // placeholder=" this is thext" // Optional blur-up while loading
          />

          <p className="p-2 text-[#565656] font-medium  text-base text-wrap mx-10">
            Championing an inclusive approach to impactful development in
            Northeast India and beyond, through co-creation with local
            stakeholders and effective partnerships.
          </p>
        </div>
        {/* <p className=" bg-black/50 bg-cover">Read more..</p> */}
      </div>
    </div>
  );
}
