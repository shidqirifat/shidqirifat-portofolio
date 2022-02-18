import { useEffect } from "react";
import LinkAnchor from "../link/LinkAnchor";
import { gsap } from "gsap";

export default function Hero() {
  useEffect(() => {
    gsap.from("#hero", { y: 60, opacity: 0, duration: 0.4 });
  }, []);

  return (
    <div id="hero" className="flex flex-col justify-center min-h-screen">
      <h1 className="text-transparent text-4xl font-bold mb-6 bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        Hello, I'm Shidqi <span className="text-neutral-50">👋</span>
      </h1>
      <p className="text-slate-600 dark:text-slate-200 text-xl w-4/5 leading-8 transition">
        I'm Frontend Developer. Currently learning everything. I publish my
        experiment project on Github.
      </p>
      <div className="group cursor-pointer w-max mt-4">
        <LinkAnchor link="/about" symbol="➡">
          See my full profile
        </LinkAnchor>
      </div>
    </div>
  );
}
