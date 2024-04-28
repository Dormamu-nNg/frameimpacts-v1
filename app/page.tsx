import First from "@/components/First";
import Second from "@/components/Second";
import Third from "@/components/Third";
export default function Home() {
  return (
    <main className="">
      <section id="first">
        <First />
      </section>
      <section id="second">
        <Second />
      </section>
      <section id="third">
        <Third />
      </section>
    </main>
  );
}
