import Head from "next/head";
import { useEffect } from "react";
import Project from "../../components/project/Project";
import { gsap } from "gsap";

export default function Home() {
  useEffect(() => {
    gsap.from(".project-title", { y: 60, opacity: 0, duration: 0.3 });
    gsap.fromTo(
      ".project-item > *",
      {
        y: 60,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.1,
        delay: 0.4,
        stagger: 0.4,
      }
    );
  }, []);

  return (
    <>
      <Head>
        <title>Project - Shidqi Rifat</title>
      </Head>
      <div id="project" className="pt-40">
        <Project />
      </div>
    </>
  );
}
