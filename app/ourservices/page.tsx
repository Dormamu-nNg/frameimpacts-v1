import CapacityBuildingServices from "@/components/CapacityBuildingServices";
import CoDesignFrameworks from "@/components/CoDesignFrameworks";
import StartUpMentoring from "@/components/StartUpMentoring";
import Ras from "@/components/Ras";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Props = {};

export default function OurServices({}: Props) {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="fixed bottom-0 flex bg-[#FEFEFA]/80 p-5 space-x-5 w-full justify-center rounded-sm">
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
      <section id="CapacityBuilding" className="pt-10 border-b shadow-md">
        <CapacityBuildingServices />
      </section>
      <section id="CoDesignFrameworks" className="pt-5 border-b shadow-md">
        <CoDesignFrameworks />
      </section>
      <section id="StartUpMentoring">
        <StartUpMentoring />
      </section>
      <section id="ras" className="pt-5 border-b shadow-md">
        <Ras />
      </section>
    </div>
  );
}
