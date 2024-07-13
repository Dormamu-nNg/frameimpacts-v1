"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { homepage } from "@/images";
import { Button } from "./ui/button";
type Props = {};

export default function First({}: Props) {
  return (
    <div className="flex flex-col">
      <div className="flex-full min-w-0 relative  shadow-md ">
        <Image
          src={homepage}
          alt="Picture of the author"
          width={1920}
          height={720}
          style={{
            opacity: "90%",
          }}
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />
        <div
          className="hidden lg:inline absolute mt-0 top-0 pt-40 xl:pt-52 left-0 lg:mt-30 bg-transparent z-20 h-full w-full
         bg-gradient-to-r from-gray-900/90 via-transparent to-transparent p-10 space-y-5 items-center text-[#121113]"
        >
          {/* Style will be inherited from the parent element */}
          <p className="text-6xl font-bold max-w-xl z-50 text-[#68f7fc]">
            Unlocking Potential, Igniting Change for Sustainable Development
          </p>
          {/* <Link
            href="/aboutus"
            className="flex cursor-pointer text-white hover:animate-pulse bg-black p-5 w-fit"
          >
            Know more ...
            <ArrowRight className="ml-5" />
          </Link> */}
        </div>
      </div>
      <div className="flex flex-col md:flex-row pt-5 space-x-5 space-y-3 items-center justify-center">
        <Link href="#second">
          <Button variant="ghost" className="heroButton">
            Vision/Mission
          </Button>
        </Link>
        <Link href="#third">
          <Button variant="ghost" className="heroButton">
            BUSINESS STRATEGY OPERATIONS
          </Button>
        </Link>
        <Link href="#fourth">
          <Button variant="ghost" className="heroButton">
            Partners
          </Button>
        </Link>
      </div>
    </div>
  );
}
