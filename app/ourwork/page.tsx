import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CoDesignAndSupport from "@/components/CoDesignAndSupport";
import Assessments from "@/components/Assessments";
import CapacityBuilding from "@/components/CapacityBuilding";
import ResearchAndDocumentation from "@/components/ResearchAndDocumentation";
import MentoredEntrepreneurs from "@/components/MentoredEntrepreneurs";

type Props = {};

export default function OurWork({}: Props) {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* <h1 className="uppercase my-10 text-lg md:text-5xl font-bold text-[#BFA181]">
        discovering new aspects of ourselves
      </h1> */}
      <Tabs defaultValue="all" className="flex flex-col w-full mx-auto mt-10">
        <TabsList className="hidden md:inline-flex mx-auto">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="cb">CAPACITY BUILDING</TabsTrigger>
          <TabsTrigger value="assessments">ASSESSMENTS</TabsTrigger>
          <TabsTrigger value="cds">CO-DESIGN & SUPPORT</TabsTrigger>
          <TabsTrigger value="rd">RESEARCH & DOCUMENTATION</TabsTrigger>
          <TabsTrigger value="me">MENTORED ENTREPRENEURS</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="flex flex-col">
          <section id="one" className="border-b shadow-md">
            <CapacityBuilding />
          </section>
          <section id="two" className="border-b shadow-md">
            <Assessments />
          </section>
          <section id="three" className="border-b shadow-md">
            <CoDesignAndSupport />
          </section>
          <section id="four" className="border-b shadow-md">
            <ResearchAndDocumentation />
          </section>
          <section id="five" className="border-b shadow-md">
            <MentoredEntrepreneurs />
          </section>
        </TabsContent>
        <TabsContent value="cb">
          <CapacityBuilding />
        </TabsContent>
        <TabsContent value="assessments">
          <Assessments />
        </TabsContent>
        <TabsContent value="cds">
          <CoDesignAndSupport />
        </TabsContent>
        <TabsContent value="rd">
          <ResearchAndDocumentation />
        </TabsContent>
        <TabsContent value="me">
          <MentoredEntrepreneurs />
        </TabsContent>
      </Tabs>
    </div>
  );
}
