import Image from "next/image";
import React from "react";
import stories1 from "../public/1.webp";
import stories2 from "../public/2.webp";
import stories3 from "../public/3.webp";
import stories4 from "../public/4.webp";

type Props = {};

export default function Third({}: Props) {
  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className=" uppercase text-center p-5 pt-10 text-4xl font-extrabold">
        Our Partners
      </h1>
      <div className="mx-auto grid grid-cols-2 md:flex flex-row p-10 md:mx-auto items-center justify-evenly">
        <Image
          className="rounded-2xl md:rounded-3xl m-5 "
          src={stories1}
          alt=""
          width={300}
          height={300}
        />
        <Image
          className="rounded-2xl md:rounded-3xl m-10"
          src={stories2}
          alt=""
          width={300}
          height={300}
        />
        <Image
          className="rounded-2xl md:rounded-3xl m-10"
          src={stories3}
          alt=""
          width={300}
          height={300}
        />
        <Image
          className="rounded-2xl md:rounded-3xl m-10"
          src={stories4}
          alt=""
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}
