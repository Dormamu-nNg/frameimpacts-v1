import Link from "next/link";
import React from "react";

type Props = {};

export default function OurServices({}: Props) {
  return (
    <div className="flex flex-col items-center mx-auto p-10">
      <h1 className="uppercase text-5xl font-bold">
        discovering new aspects of ourselves
      </h1>
      <div className="flex pt-10 space-x-10 mx-auto ">
        <div className="flex flex-col  ">
          <h1 className="heading">Capacity Build Up</h1>
          <Link href="" className="topic cursor-pointer">
            Training
          </Link>
        </div>
        <div className="flex flex-col ">
          <h1 className="heading">Assessment</h1>
          <Link href="" className="topic cursor-pointer">
            Need Assessment
          </Link>
          <Link href="" className="topic cursor-pointer">
            Primary
          </Link>
          <Link href="" className="topic cursor-pointer">
            Survey
          </Link>
          <Link href="" className="topic cursor-pointer">
            Baseline
          </Link>
          <Link href="" className="topic cursor-pointer">
            Impact Assessment
          </Link>
        </div>
        <div>
          <h1 className="heading">Publication</h1>
          <Link href="" className="topic cursor-pointer">
            Books
          </Link>
        </div>
      </div>
    </div>
  );
}
