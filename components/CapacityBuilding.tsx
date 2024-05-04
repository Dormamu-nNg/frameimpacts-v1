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
import ngos from "../public/ngos.webp";
import working from "../public/workingprofesionals.webp";

type Props = {};

function CapacityBuilding({}: Props) {
  return (
    <div className="flex flex-col my-5 border-b-gray-500">
      <h1 className="text-2xl mx-auto text-red-500 font-bold my-1">
        CAPACITY BUILDING
      </h1>
      <div className="grid md:grid-cols-2 mx-auto">
        <Card className="flex flex-col items-center my-3 mx-5">
          <CardHeader className="text-lg font-bold my-1">NGOs</CardHeader>
          <CardContent className="flex flex-col items-center justify-center ">
            <Image
              src={ngos}
              alt="photo"
              height={500}
              width={500}
              className="rounded-2xl my-1 border-2 border-gray-500 "
            />
            <CardDescription className="p-2 mx-auto ">
              <p className="text-gray-500 text-lg text-balance text-center">
                M&E Training and workshops was provided to Eight NGOs from
                Churachandpur, Manipur
              </p>
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="flex flex-col items-center my-3 mx-5">
          <CardHeader className="text-lg font-bold my-1">
            Working Professionals
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center ">
            <Image
              src={working}
              alt="photo"
              height={500}
              width={500}
              className="rounded-2xl my-1 border-2 border-gray-500 "
            />
            <CardDescription className="p-2 mx-auto ">
              <p className="text-gray-500 text-lg text-balance text-center">
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
