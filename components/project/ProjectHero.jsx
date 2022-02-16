import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ProjectHero({ slug, title, date }) {
  const [widthScreen, setWidthScreen] = useState(null);

  useEffect(() => {
    function watchWidth() {
      setWidthScreen(window.innerWidth);
    }

    watchWidth();

    window.addEventListener("resize", watchWidth);

    return function () {
      window.removeEventListener("resize", watchWidth);
    };
  }, [widthScreen]);

  return (
    <>
      <div className="w-full h-96 rounded-2xl relative overflow-hidden">
        <div className="bg-gradient-to-b from-white/0 to-slate-800 absolute inset-0 z-10"></div>
        <div className="h-full relative">
          <Image
            src={`/images/${slug}${widthScreen > 640 ? "" : "-mobile"}.png`}
            alt="Project"
            layout="fill"
            objectFit="cover"
            objectPosition="50% 20%"
            priority
          />
        </div>
        <div className="absolute left-6 bottom-6 z-20">
          <h2 className="text-2xl text-slate-100 font-bold">{title}</h2>
          <h3 className="text-lg text-slate-300 mt-1">{date}</h3>
        </div>
      </div>
    </>
  );
}
