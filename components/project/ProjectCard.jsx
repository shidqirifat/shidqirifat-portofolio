import Image from "next/image";
import LinkAnchor from "../link/LinkAnchor";
import SubTitle from "../section/SubTitle";
import SubContent from "../section/SubContent";
import Link from "next/link";
import { useEffect, useState } from "react";
import aosAnimate from "../utils/aosAnimate";

export default function ProjectCard({ date, title, text, link, slug }) {
  const [widthScreen, setWidthScreen] = useState(null);

  useEffect(() => {
    aosAnimate(".project-card");

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
      <Link href={`/project/${slug}`} passHref>
        <div
          id="project"
          className="project-card opacity-0 p-6 cursor-pointer shadow-sm rounded-sm flex flex-wrap-reverse  sm:flex-nowrap sm:gap-8 justify-end sm:justify-between border border-slate-300 dark:border-slate-700 relative hover:bg-slate-200 dark:hover:bg-slate-800 transition duration-700"
        >
          <div className="w-full sm:w-8/12">
            <SubTitle>{title}</SubTitle>
            <h3 className="text-slate-500 dark:text-slate-300 text-sm mt-2 transition duration-700">
              {date}
            </h3>
            <SubContent isProject={true}>{text}</SubContent>
            <span className="group cursor-pointer w-max my-2 absolute bottom-4 left-6">
              <LinkAnchor link={link} external={true}>
                Visit live web
              </LinkAnchor>
            </span>
          </div>
          <div className="w-full sm:w-48 h-48 relative ">
            <Image
              src={`/images/${slug}${widthScreen < 640 ? "" : "-mobile"}.png`}
              alt="Project Image"
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
              priority
            />
          </div>
        </div>
      </Link>
    </>
  );
}
