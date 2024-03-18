import Hero from "@/components/Hero";
import NewProducts from "@/components/NewProducts";
import Testimonials from "@/components/Testimonials";
import MobNavBar from "@/components/MobNavBar";
import Footer from "@/components/Footer";
import Image from "next/image"; 
import { Children } from "react";

export default function Home() {
  return (
    <main>
       <Hero />
       <NewProducts />
       <Testimonials />
       <MobNavBar />
       <Footer />
    </main>
  );
}
