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
import { comingsoon, rilum_foundation } from "@/images";

type Props = {};

function CoDesignAndSupport({}: Props) {
  return (
    <div className="flex flex-col my-5 bg-[#d6c3b5]">
      <h1 className="text-2xl mx-auto text-red-500 font-bold my-1">
        CO-DESIGN & SUPPORT
      </h1>
      <div className="grid md:grid-cols-3 mx-auto ">
        <Card className="flex flex-col items-center my-3 mx-5 bg-[#DDD0C8]">
          <CardHeader className="text-lg font-bold my-1">
            RILUM FOUNDATION
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center ">
            <Image
              src={rilum_foundation}
              alt="photo"
              height={500}
              width={500}
              className="rounded-2xl my-1 border-2 border-gray-500 "
            />
            <CardDescription className="p-2 mx-auto ">
              <p className="text-gray-500 text-lg text-balance text-center">
                Rilum Foundation for Sustainable Development is an NGO from Smit
                Village, Shillong Peri Phery, East Khasi Hills. We have been
                closely working together hand in hand. The engagement with Rilum
                Foundation has been tactical based on trust, and it has been
                beneficial for both parties. We have shared and learned from one
                another of multi-dimensional aspects.
              </p>
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="flex flex-col items-center my-3 mx-5 bg-[#DDD0C8]">
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

export default CoDesignAndSupport;
