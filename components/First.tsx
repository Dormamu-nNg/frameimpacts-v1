import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import profilePic from "../public/wallpaper.jpeg";
import React from "react";

type Props = {};

export default function First({}: Props) {
  return (
    <div className="flex flex-col border border-gray-200">
      <div className="flex flex-col lg:flex-row items-center bg-slate-200">
        <div className="p-10 flex flex-col bg-slate-200 space-y-5">
          <h1 className="text-5xl font-bold">Welcome to FrameImpacts</h1>
          <Link
            href=""
            className="flex cursor-pointer text-white hover:animate-pulse bg-black p-5 w-fit"
          >
            Know more ...
            <ArrowRight className="ml-5" />
          </Link>
        </div>
        <div className="bg-slate-200 ">
          <Image
            className="p-5 "
            src={profilePic}
            alt="Picture of the author"
            // width={1000}
            // height={500}
            // blurDataURL="data:..." automatically provided
            // placeholder=" this is thext" // Optional blur-up while loading
          />
        </div>
      </div>
      <div className="flex p-5 space-x-5 items-center justify-center bg-slate-200">
        <Link href="#second">
          <button className="heroButton">Vision/Mission</button>
        </Link>
        <Link href="#third">
          <button className="heroButton">Partners/Clients</button>
        </Link>
      </div>
    </div>
  );
}
