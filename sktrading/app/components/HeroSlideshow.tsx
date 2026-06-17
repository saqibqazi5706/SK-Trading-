"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  "/machines/machine-1.jpg.png",
  "/machines/machine-2.jpg.png",
  "/machines/machine-3.jpg.png",
];

export default function HeroSlideshow() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {slides.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt="Industrial machine"
          fill
          priority={index === 0}
          className={`object-cover transition-opacity duration-1000 ${
            index === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-slate-900/85" />
    </div>
  );
}
