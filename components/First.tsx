"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import profilePic from "../public/wallpaper.jpeg";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
type Props = {};

export default function First({}: Props) {
  return (
    <div className="flex flex-col border border-gray-200">
      <div className="flex-full min-w-0 relative">
        <Image
          src={profilePic}
          alt="Picture of the author"
          width={1920}
          height={1080}
          // blurDataURL="data:..." automatically provided
          // placeholder=" this is thext" // Optional blur-up while loading
        />
        <div
          className="absolute mt-0 top-0 pt-40 xl:pt-52 left-0 lg:mt-30 bg-transparent z-20 h-full w-full
         bg-gradient-to-r from-gray-900/90 via-transparent to-transparent p-10 space-y-5 items-center text-white"
        >
          <span className="p-10 text-5xl font-bold max-w-xl z-50">
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={[
                "Welcome to FrameImpacts",
                "Unlocking Potential",
                "Igniting Change for Sustainable Development",
              ]}
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
          {/* <Link
            href="/aboutus"
            className="flex cursor-pointer text-white hover:animate-pulse bg-black p-5 w-fit"
          >
            Know more ...
            <ArrowRight className="ml-5" />
          </Link> */}
        </div>
      </div>
      <div className="flex p-5 space-x-5 items-center justify-center bg-slate-200">
        <Link href="#second">
          <button className="heroButton">Vision/Mission</button>
        </Link>
        <Link href="#third">
          <button className="heroButton line-clamp-2">
            BUSINESS STRATEGY OPERATIONS
          </button>
        </Link>
        <Link href="#fourth">
          <button className="heroButton">Partners</button>
        </Link>
      </div>
    </div>
  );
}
