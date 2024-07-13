import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { comingsoon } from "@/images";
type Props = {};

function MentoredEntrepreneurs({}: Props) {
  return (
    <div className="flex flex-col my-5">
      <h1 className="text-2xl md:text-5xl mx-auto text-red-500 font-bold my-1">
        RESEARCH & DOCUMENTATION
      </h1>
      <div className="grid md:grid-cols-2 mx-auto">
        <Card className="flex flex-col items-center my-3 mx-5">
          <CardHeader className="text-lg font-bold my-1">
            Coming Soon!
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center ">
            <Image
              src={comingsoon}
              alt="photo"
              height={500}
              width={500}
              className="rounded-2xl my-1 border-2 border-gray-500 "
            />
            <CardDescription className="p-2 mx-auto ">
              <p className="text-gray-500 text-lg text-balance text-center">
                Loading!
              </p>
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default MentoredEntrepreneurs;
