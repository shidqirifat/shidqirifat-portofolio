import Head from "next/head";
import Card from "../components/about/profile/Profile";
import Social from "../components/about/social/Social";
import Summary from "../components/about/summary/Summary";
import Timelines from "../components/about/timeline/Timelines";
import { useEffect } from "react";
import { gsap } from "gsap";

export default function Home() {
  useEffect(() => {
    gsap.fromTo(
      ".about",
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, stagger: 0.3 }
    );
  }, []);

  return (
    <>
      <Head>
        <title>About - Shidqi Rifat</title>
      </Head>
      <div className="pt-40 flex gap-10 mb-20 flex-wrap lg:flex-nowrap">
        <div className="about w-full sm:max-w-[320px] mx-auto lg:w-4/12 px-6 py-10 h-max rounded-3xl bg-slate-100 dark:bg-slate-800 text-center transition duration-700">
          <Card />
        </div>
        <div className="w-full lg:w-8/12">
          <Summary />
          <Social />
          <Timelines />
        </div>
      </div>
    </>
  );
}
