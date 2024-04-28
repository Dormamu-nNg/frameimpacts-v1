import React from "react";
import vision from "../public/pvision.jpeg";
import mission from "../public/mission1.jpeg";
import Image from "next/image";

type Props = {};

export default function Second({}: Props) {
  return (
    <div className="flex justify-evenly pt-10">
      <div className="flex flex-col items-center relative p-5">
        <p className="font-bold text-4xl uppercase">Vision</p>
        <Image
          className="p-5 "
          src={vision}
          alt="Picture of the author"
          width={500}
          height={500}
          // blurDataURL="data:..." automatically provided
          // placeholder=" this is text" // Optional blur-up while loading
        />
        <div
          className="inline absolute mt-0 top-0 pt-40 xl:pt-55 left-10 lg:mt-40
        z-20 h-full w-full pl-10 space-y-5 text-white"
        >
          <h2 className="text-[10px] w-2/4 lg:text-md font-bold max-w-sm z-50 p-1 bg-black/50 bg-contain">
            Development Work
          </h2>
          <p className="p-1 text-[8px]  lg:text-sm line-clamp-3 w-2/4 lg:max-w-sm bg-black/50 bg-cover">
            Social work is a profession focused on helping people and
            communities cope with challenges in their lives by providing
            support, resources, and guidance to improve their well-being and
            overall quality of life
          </p>
          {/* <p className=" bg-black/50 bg-cover">Read more..</p> */}
        </div>
      </div>
      <div className="flex flex-col items-center p-5 relative">
        <p className="font-bold text-4xl uppercase">Mission</p>
        <Image
          className="p-5 "
          src={mission}
          alt="Picture of the author"
          width={500}
          height={500}
          // blurDataURL="data:..." automatically provided
          // placeholder=" this is thext" // Optional blur-up while loading
        />
        <div
          className="inline absolute mt-0 top-0 pt-40 xl:pt-55 left-10 lg:mt-40
        z-20 h-full w-full pl-10 space-y-5 text-white"
        >
          <h2 className="text-[10px] w-2/4 lg:text-md font-bold max-w-sm z-50 p-1 bg-black/50 bg-contain">
            Development Work
          </h2>
          <p className="p-1 text-[8px]  lg:text-sm line-clamp-3 w-2/4 lg:max-w-sm bg-black/50 bg-cover">
            Social work is a profession focused on helping people and
            communities cope with challenges in their lives by providing
            support, resources, and guidance to improve their well-being and
            overall quality of life
          </p>
          {/* <p className=" bg-black/50 bg-cover">Read more..</p> */}
        </div>
      </div>
    </div>
  );
}
