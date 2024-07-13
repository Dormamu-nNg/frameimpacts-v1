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
import { comingsoon, efficor, primeMeghalaya, rilum } from "@/images";
type Props = {};

function Assessments({}: Props) {
  return (
    <div className="flex flex-col my-5">
      <h1 className="text-2xl md:text-5xl mx-auto text-red-500 font-bold my-1">
        ASSESSMENTS
      </h1>
      <div className="grid md:grid-cols-3 mx-auto my-7 ">
        <Card className="flex flex-col items-center my-3 mx-5">
          <CardHeader className="text-lg font-bold my-1">
            PRIME Meghalaya
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center ">
            <Image
              src={primeMeghalaya}
              alt="photo3"
              height={500}
              width={500}
              className="rounded-2xl my-1 border-2 border-gray-500 "
            />
            <CardDescription className="p-2 mx-auto ">
              <p className="text-gray-600 text-base text-balance text-center">
                A project for Data Processing and Data Analysis on the
                Applications of CM Elevate Schemes. To deliver the task, a
                scoring system was developed based on the key factors identified
                in the screening process of applicants. This system is efficient
                and effective in shortlisting the most promising candidates that
                meet the criteria. The scoring system ensures a fair practice of
                selection and more effective allocation of scheme grants.
              </p>
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="flex flex-col items-center my-3 mx-5">
          <CardHeader className="text-lg font-bold my-1">EFICOR</CardHeader>
          <CardContent className="flex flex-col items-center justify-center ">
            <Image
              src={efficor}
              alt="photo3"
              height={500}
              width={500}
              className="rounded-2xl my-1 border-2 border-gray-500 "
            />
            <CardDescription className="p-2 mx-auto ">
              <p className="text-gray-600 text-base text-balance text-center">
                Impact assessment of the EFICOR’s CCT project in Hasanpur and
                Muzzasafar Districts of Bihar, as an Associate Assessor. The
                project end evaluation involved all stakeholders. The evaluation
                objectives were to find out the impact of intervention based on
                the assessment criteria;
                <span className="flex">
                  1. Relevance 2. Effectiveness 3. Efficiency 4. Inclusiveness
                  5. Impact 6. Sustainability
                </span>
              </p>
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="flex flex-col items-center my-3 mx-5">
          <CardHeader className="text-lg font-bold my-1">
            Rilum Foundation
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center ">
            <Image
              src={rilum}
              alt="photo3"
              height={500}
              width={500}
              className="rounded-2xl my-1 border-2 border-gray-500 "
            />
            <CardDescription className="p-2 mx-auto ">
              <p className="text-gray-600 text-base text-balance text-center">
                Conducted Needs Assessment for Rilums proposed new project in 5
                villages of Bhoirymbong Block, Ribjoi Dist. The village Headmen,
                women, youth, and leaders were engaged during the needs
                assessment. The Needs Assessment was followed by Market research
                covering Smit Areas, Laitkroh, Mylliem Areas in East Khasi Hills
                and Byrnihat Areas in Ribhoi District.
              </p>
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Assessments;
