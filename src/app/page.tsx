import Image from "next/image";
import Hero from "@/components/hero";
export default function Home() {
  return (
    <>
     <main className="min-h-screen bg-black/[0.9] antialiased bg-grid-white/[0.02]">
      <Hero/>
     </main>
    </>
  );
}
