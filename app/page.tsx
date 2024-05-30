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
    <main className="flex min-h-screen flex-col items-center p-0 bg-[#a5a5c9]">
      <div className="relative w-full h-[50vh] md:h-[50vh] overflow-hidden">
        <Image
          className="object-cover w-full h-full"
          src="/logo.png"
          alt="Logo"
          layout="fill"
          priority
        />
      </div>
      <Countdown targetDate="2024-06-08T18:00:00" />
      <Challenges />
    </main>
  );
}
