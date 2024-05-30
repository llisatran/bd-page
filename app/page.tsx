"use client";

import Image from "next/image";
import Countdown from "./Countdown";
import Challenges from "./Challenges";

export default function Home() {
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
