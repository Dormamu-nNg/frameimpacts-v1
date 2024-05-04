import { Button } from "@/components/ui/button";
import React from "react";

type Props = {};

function PublishedLibrary({}: Props) {
  return (
    <div className="flex flex-col items-center justify-center space-y-5 max-w-7xl">
      <div className="flex flex-col space-y-5 items-center mx-auto bg-gradient-to-tr from-blue-300 to-blue-600 h-60 w-full">
        <h1 className="text-4xl items-center justify-center mx-auto">Blogs</h1>
        <p className="text-lg">Coming Soon</p>
      </div>
      <div>
        <h1 className="text-4xl font-bold">Videos</h1>
      </div>
      <div className="flex items-center w-full justify-between space-y-5 ">
        <h1 className="px-10 text-4xl font-bold">Reports</h1>
        <div className=" flex flex-col  space-y-2 ">
          <div className="flex border-2 items-center rounded-lg border-gray-500 p-2 w-full justify-between">
            <p className="p-5">Report-1</p>
            <Button asChild variant="default">
              <a href="" download="">
                Download
              </a>
            </Button>
          </div>
          <div className="flex border-2 items-center rounded-lg border-gray-500 p-2 w-full justify-between">
            <p className="p-5">Report-1</p>
            <Button asChild variant="default">
              <a href="" download="">
                Download
              </a>
            </Button>
          </div>
          <div className="flex border-2 items-center rounded-lg border-gray-500 p-2 w-full justify-between">
            <p className="p-5">Report-1</p>
            <Button asChild variant="default">
              <a href="" download="">
                Download
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PublishedLibrary;
