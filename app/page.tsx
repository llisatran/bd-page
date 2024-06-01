"use client";

import Image from "next/image";
import Countdown from "./Countdown";
import Challenges from "./Challenges";
import { useEffect } from "react";

const addGlitterEffect = () => {
  document.addEventListener("mousemove", (e) => {
    const glitter = document.createElement("div");
    glitter.className = "glitter";
    glitter.style.left = `${e.clientX}px`;
    glitter.style.top = `${e.clientY}px`;

    document.body.appendChild(glitter);

    setTimeout(() => {
      glitter.remove();
    }, 1000); // The glitter will disappear after 1 second
  });
};

export default function Home() {
  useEffect(() => {
    addGlitterEffect();
  }, []);
  return (
    <main className="flex flex-col items-center justify-start min-h-screen bg-[#a2a2c8] overflow-x-hidden">
      <div className="w-full flex justify-center ">
        <div className="relative w-4/5 sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4">
          <Image
            className="object-contain top-0 "
            src="/logo.png"
            alt="Logo"
            layout="responsive"
            width={500}
            height={200}
            priority
          />
        </div>
      </div>
      <Countdown targetDate="2024-06-08T18:00:00" />
      <Challenges />
    </main>
  );
}
