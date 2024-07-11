"use client";

import { blog } from "@/images";
import { PhoneCall } from "lucide-react";
import Image from "next/image";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { GoogleMapsEmbed } from "@next/third-parties/google";

type Props = {};
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactUs({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:sangaihte@gmail.com?subject=${formData.subject}&body=Hi, my name is${formData.name}, ${formData.message} ${formData.email}`;
  };
  return (
    <div className="flex flex-col text-center justify-evenly mx-auto items-center ">
      <div className="flex flex-col border-b shadow-md w-full pb-5">
        <h4 className="text-2xl p-5 md:text-4xl font-semibold justify-center text-center">
          Better yet, see us in person!
        </h4>
        <p className="decoration-[#f7ab0a]/50 underline text-xl md:text-2xl text-gray-700">
          We love our customers, so feel free to visit during normal business
          hours.
        </p>
      </div>
      <div className="grid grid-cols-2 space-y-5 space-x-10 items-center p-5">
        <div className="flex flex-col items-center justify-center border shadow-lg pb-2 rounded-md">
          <h1 className="text-3xl m-2">FrameImpacts</h1>
          <p className="text-2xl m-2">
            FrameImpacts Consultancy Services, Nongrah, Shillong, Meghalaya,
            India,
          </p>
          <p className="flex text-xl">
            <PhoneCall /> : 7896892183
          </p>
          <h1 className="text-3xl m-2">Hours</h1>
          {/* Timing here */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-2 mx-auto"
          >
            <div className="flex space-x-2">
              <input
                {...register("name")}
                placeholder="Name"
                className="contactInput"
                type="text"
              />
              <input
                {...register("email")}
                placeholder="Email"
                className="contactInput"
                type="email"
              />
            </div>
            <input
              {...register("subject")}
              placeholder="Subject"
              className="contactInput"
              type="text"
            />
            <textarea
              {...register("message")}
              placeholder="Message"
              className="contactInput"
            />
            <button
              type="submit"
              className="bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="flex pb-7 pt-6 px-3 border shadow-lg rounded-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.959546254137!2d91.92063257416814!3d25.57301261637854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375079247a15b057%3A0x6905cd2d04232b15!2sFrameImpacts%20Consultancy%20Services!5e0!3m2!1sen!2sin!4v1715117889285!5m2!1sen!2sin"
            width="600"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
