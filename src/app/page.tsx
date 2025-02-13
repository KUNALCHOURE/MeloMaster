import Hero from "@/components/hero";
import Featuredcourses from "@/components/featuredcourses";
import Whychooseasection from "@/components/whychooseasection";
import { InfiniteMovingCardsDemo } from "@/components/testimonialcards";
import UpcommingWebinar from "@/components/Upcomingwebinar";
import Instructors from "@/components/instructors";
export default function Home() {
  return (
    
     <main className="min-h-screen bg-black/[0.9] antialiased bg-grid-white/[0.02]">
      <Hero/>
      <Featuredcourses/>
      <Whychooseasection/>
      <InfiniteMovingCardsDemo/>
      <UpcommingWebinar/>
      <Instructors/>
      
     </main>
    
  );
}
