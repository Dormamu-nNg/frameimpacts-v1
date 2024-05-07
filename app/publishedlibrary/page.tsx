import TableWrapper from "@/components/TableWrapper";
import { blog } from "@/images";
import Image from "next/image";
import React from "react";
type Props = {};

function PublishedLibrary({}: Props) {
  return (
    <div className="flex flex-col items-center  space-y-5 max-w-5xl justify-center mx-auto">
      <div className="flex flex-col space-y-5 items-center">
        <Image src={blog} alt="Image not found" width={850} height={550} />
        <p className="text-lg">Coming Soon</p>
      </div>
      <div>
        <h1 className="text-4xl font-bold">Videos</h1>
      </div>
      <div className="container space-y-5">
        <h1 className="text-4xl font-bold">Reports</h1>
        <TableWrapper />
      </div>
    </div>
  );
}

export default PublishedLibrary;
