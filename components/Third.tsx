import Image from "next/image";
import React from "react";
import stories1 from "../public/StoriesCommunitiesHorizontal.jpg";
import stories2 from "../public/GroundingValues 1.jpg";

type Props = {};

export default function Third({}: Props) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className=" uppercase p-5 pt-10 text-4xl font-extrabold">
        Partners and Clients
      </h1>
      <div className="flex flex-col md:flex-row p-5 my-auto md:mx-auto items-center justify-evenly">
        <Image
          className="rounded-2xl md:rounded-3xl m-10"
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
      </div>
    </div>
  );
}
