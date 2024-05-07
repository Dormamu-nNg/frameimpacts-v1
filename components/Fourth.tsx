import Image from "next/image";
import React from "react";
import { dci, highland, neicord, prime, rilum, rilumLogo } from "@/images";

type Props = {};

export default function Fourth({}: Props) {
  return (
    <div className="flex flex-col items-center justify-center mx-auto max-w-6xl">
      <h1 className=" uppercase text-center p-5 pt-10 text-4xl font-extrabold text-[#F02D3A]">
        Our Partners
      </h1>
      <div className=" mx-auto grid grid-cols-2 md:grid-cols-3 p-10 md:mx-auto items-center justify-center">
        <Image className=" m-5 " src={dci} alt="" width={300} height={300} />
        <Image
          className="rounded-2xl md:rounded-xl m-5 "
          src={rilumLogo}
          alt="Images not found"
          width={300}
          height={300}
        />
        <Image
          className="rounded-2xl md:rounded-xl m-10"
          src={neicord}
          alt="Images not found"
          width={300}
          height={300}
        />
        <Image
          className="rounded-2xl md:rounded-xl m-10"
          src={highland}
          alt="Images not found"
          width={300}
          height={300}
        />
        <Image
          className="rounded-2xl md:rounded-xl m-10"
          src={prime}
          alt="Images not found"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}
