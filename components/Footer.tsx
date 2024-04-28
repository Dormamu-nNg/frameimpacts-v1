import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="flex items-center justify-center flex-col bg-slate-400">
      <h1 className="uppercase text-2xl pt-10 font-bold">FrameImpacts</h1>
      <p className="font-thin text-gray-950">Lapalang, Shillong, Meghalaya</p>
      <p className="font-thin text-gray-950">Phone:+91-1234567890</p>
      <p className="font-thin text-gray-950 pb-10">
        email:frameimpact@gmail.com{" "}
      </p>
    </div>
  );
}
