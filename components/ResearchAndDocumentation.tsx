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
import { abandonwomen, comingsoon } from "@/images";

type Props = {};

function ResearchAndDocumentation({}: Props) {
  return (
    <div className="flex flex-col my-5">
      <h1 className="text-2xl md:text-5xl mx-auto text-red-500 font-bold my-1">
        RESEARCH & DOCUMENTATION
      </h1>
      <div className="grid md:grid-cols-3 mx-auto my-7">
        <Card className="flex flex-col items-center my-3 mx-5 border ">
          <CardHeader className="text-gray-800 text-center text-lg font-bold my-1">
            Abandoned Single Mothers in East Khasi Hills
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center ">
            <Image
              src={abandonwomen}
              alt="photo"
              height={500}
              width={500}
              className="rounded-2xl my-1 border-2 border-gray-500 "
            />
            <CardDescription className="p-2 mx-auto ">
              <p className="text-gray-600 text-base text-balance text-center">
                This study was carried out in 4 blocks; Mawryngkneng block,
                Mawkyrwat block, Laitkyrhong block, and Khatarshnong Laitkroh.
                The study highlights the challenges faced by abandoned single
                mothers. 32% of these mothers attribute abandonment to
                misunderstandings and marital affairs. They struggle emotionally
                and financially, with family being their primary source of
                support.
              </p>
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="flex flex-col items-center my-3 mx-5 border ">
          <CardHeader className="text-lg text-[#dda15e] font-bold my-1">
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
              <p className="text-[#fefae0] text-lg text-balance text-center">
                Loading!
              </p>
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default ResearchAndDocumentation;
