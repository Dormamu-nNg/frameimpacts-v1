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
import { ngos, workingprofesionals, rayburncollege, jrs, nest } from "@/images";

type Props = {};

function CapacityBuilding({}: Props) {
  return (
    <div className="flex flex-col my-5">
      <h1 className="text-2xl md:text-5xl mx-auto text-red-500 font-bold my-1">
        CAPACITY BUILDING
      </h1>
      <div className="grid md:grid-cols-3 mx-auto my-7">
        <Card className="flex flex-col items-center my-3 mx-5 shadow-sm ">
          <CardHeader className="text-gray-600 text-base font-bold my-1">
            JRS
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center ">
            <Image
              src={jrs}
              alt="photo"
              height={500}
              width={500}
              className="rounded-2xl my-1 border-2 border-gray-500 "
            />
            <CardDescription className="p-2 mx-auto ">
              <p className="text-gray-600 text-base text-balance text-center">
                Two days Tailored Program Management and M&E Training and
                Workshop at Lengpui, Aizawl
              </p>
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="flex flex-col items-center my-3 mx-5 shadow-sm ">
          <CardHeader className="text-gray-600 text-base font-bold my-1">
            NEST
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center ">
            <Image
              src={jrs}
              alt="photo"
              height={500}
              width={500}
              className="rounded-2xl my-1 border-2 border-gray-500 "
            />
            <CardDescription className="p-2 mx-auto ">
              <p className="text-gray-600 text-base text-balance text-center">
                One day Session on Tailored Program Management at Lamka, Manipur
              </p>
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="flex flex-col items-center my-3 mx-5 shadow-sm ">
          <CardHeader className="text-gray-600 text-base font-bold my-1">
            Rayburn College
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center ">
            <Image
              src={rayburncollege}
              alt="photo"
              height={500}
              width={500}
              className="rounded-2xl my-1 border-2 border-gray-500 "
            />
            <CardDescription className="p-2 mx-auto ">
              <p className="text-gray-600 text-base text-balance text-center">
                One day session on Exploration for Career Pathways for the
                students
              </p>
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="flex flex-col items-center my-3 mx-5 shadow-sm">
          <CardHeader className="text-gray-600 text-base font-bold my-1">
            Local NGOs
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center ">
            <Image
              src={ngos}
              alt="photo"
              height={500}
              width={500}
              className="rounded-2xl my-1 border-2 border-gray-500 "
            />
            <CardDescription className="p-2 mx-auto ">
              <p className="text-gray-600 text-base text-balance text-center">
                M&E Training and workshops was provided to Eight NGOs from
                Churachandpur, Manipur
              </p>
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="flex flex-col items-center my-3 mx-5 shadow-sm">
          <CardHeader className="text-gray-600 text-base font-bold my-1 ">
            Working Professionals
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center ">
            <Image
              src={workingprofesionals}
              alt="photo"
              height={500}
              width={500}
              className="rounded-2xl my-1 border-2 border-gray-500 "
            />
            <CardDescription className="p-2 mx-auto ">
              <p className="text-gray-600 text-base text-balance text-center">
                Two Individual Consultants from Kerela, One from Shillong,
                Meghalaya and One from Churachandpur, Manipur
              </p>
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default CapacityBuilding;
