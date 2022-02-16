import Image from "next/image";
import LinkAnchor from "../link/LinkAnchor";
import SubTitle from "../section/SubTitle";
import SubContent from "../section/SubContent";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProjectCard({ date, title, text, link, slug }) {
  const [widthScreen, setWidthScreen] = useState(null);

  useEffect(() => {
    function watchWidth() {
      setWidthScreen(window.innerWidth);
    }

    window.addEventListener("resize", watchWidth);

    return function () {
      window.removeEventListener("resize", watchWidth);
    };
  }, [widthScreen]);

  return (
    <>
      <Link href={`/project/${slug}`} passHref>
        <div className="p-6 cursor-pointer shadow-sm rounded-sm flex flex-wrap-reverse items-center sm:flex-nowrap justify-end sm:justify-between border relative hover:bg-slate-50 transition">
          <div className="w-full sm:w-8/12">
            <SubTitle>{title}</SubTitle>
            <h3 className="text-slate-500 text-sm mt-2">{date}</h3>
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
