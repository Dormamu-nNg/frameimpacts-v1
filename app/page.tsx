import First from "@/components/First";
import Second from "@/components/Second";
import Third from "@/components/Third";
import Fourth from "@/components/Fourth";

export default function Home() {
  return (
    <main className="">
      <section id="first" className="border-b shadow-md pb-8">
        <First />
      </section>
      <section id="second" className="border-b shadow-md pb-8">
        <Second />
      </section>
      <section id="third" className="border-b shadow-md pb-8">
        <Third />
      </section>
      <section id="fourth" className="border-b shadow-md pb-8">
        <Fourth />
      </section>
    </main>
  );
}
