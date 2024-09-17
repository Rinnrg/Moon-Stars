// app/about/page.tsx
import { Navigation } from "../components/nav";
import dynamic from "next/dynamic";
import Particles from "../components/particles";
import React from "react";
import Cursor from "../Cursor/Cursor";// Corrected import path

<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black cursor-none">
  {/* Konten lainnya */}
  <Cursor isDesktop={true} />
</div>

// Dynamically import AnimatedSection
const AnimatedSection = dynamic(() => import("./AnimatedSection"), {
  ssr: false, // Ensure this is only rendered on the client side
});

export const revalidate = 60;

const Page = () => {
  return (
    <div className="relative pb-16 animate-fade-in">
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <Navigation />
      <AnimatedSection />
      <div className="hidden w-full h-px md:block bg-zinc-800" />
    

    <Cursor isDesktop={true} /> {/* Adjust the `isDesktop` prop as needed */}
    </div>
  );
};

export default Page;
