"use client";

import { Mail, MapPinnedIcon, PhoneCall } from "lucide-react";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "./ui/button";
type Props = {};
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
export default function Contact({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:sangaihte@gmail.com?subject=${formData.subject}&body=Hi, my name is${formData.name}, ${formData.message} ${formData.email}`;
  };
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact Me
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="decoration-[#f7ab0a]/50 underline">Lets talk</span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneCall className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+123456789</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <Mail className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className="text-2xl">frameimpacts@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinnedIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Lapalang, Shillong</p>
          </div>
        </div>
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
          <Button
            type="submit"
            className="bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
