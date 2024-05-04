import React from "react";
import vision from "../public/pvision.jpeg";
import mission from "../public/mission1.jpeg";
import Image from "next/image";

type Props = {};

export default function Second({}: Props) {
  return (
    <div className="flex flex-col lg:flex-row justify-between pt-10 mx-auto ">
      <div className="flex flex-col items-center bg-slate-700">
        <p className="font-bold pt-5 text-4xl uppercase">Vision</p>
        <Image
          className="p-5 "
          src={vision}
          alt="Picture of the author"
          width={500}
          height={500}
          // blurDataURL="data:..." automatically provided
          // placeholder=" this is text" // Optional blur-up while loading
        />

        <p className="p-3 text-center text-lg mx-8">
          Transforming India’s North East Region social development landscape
          through data-driven insights, monitoring & evaluation tools, and
          innovative practices.
        </p>
        {/* <p className=" bg-black/50 bg-cover">Read more..</p> */}
      </div>
      <div className="flex flex-col items-center bg-slate-700 ">
        <p className="font-bold pt-5 text-4xl uppercase">Mission</p>
        <Image
          className="p-5 "
          src={mission}
          alt="Picture of the author"
          width={500}
          height={500}
          // blurDataURL="data:..." automatically provided
          // placeholder=" this is thext" // Optional blur-up while loading
        />

        <p className="p-3 text-center text-lg  bg-cover mx-8">
          Championing an inclusive approach to impactful development in
          Northeast India and beyond, through co-creation with local
          stakeholders and effective partnerships.
        </p>
        {/* <p className=" bg-black/50 bg-cover">Read more..</p> */}
      </div>
    </div>
  );
}
