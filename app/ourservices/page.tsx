import CapacityBuildingServices from "@/components/CapacityBuildingServices";
import CoDesignFrameworks from "@/components/CoDesignFrameworks";
import StartUpMentoring from "@/components/StartUpMentoring";
import Ras from "@/components/Ras";
import Link from "next/link";

type Props = {};

export default function OurServices({}: Props) {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Navigation */}
      <div className=" sticky flex p-5 space-x-5 items-center justify-center bg-slate-200/50 rounded-sm">
        <Link href="#CapacityBuilding">
          <button className="heroButton">Capacity Building</button>
        </Link>
        <Link href="#CoDesignFrameworks">
          <button className="heroButton">Co-Design Frameworks</button>
        </Link>
        <Link href="#StartUpMentoring">
          <button className="heroButton">Start-Up Mentoring</button>
        </Link>
        <Link href="#ras">
          <button className="heroButton">RAS</button>
        </Link>
      </div>
      <section id="CapacityBuilding">
        <CapacityBuildingServices />
      </section>
      <section id="#CoDesignFrameworks">
        <CoDesignFrameworks />
      </section>
      <section id="#StartUpMentoring">
        <StartUpMentoring />
      </section>
      <section id="#ras">
        <Ras />
      </section>
    </div>
  );
}
