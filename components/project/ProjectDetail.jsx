import React from "react";
import Image from "next/image";
import ProjectHero from "./ProjectHero";

export default function ProjectDetail({ date, title, text, slug, stacks }) {
  const stackElement = stacks?.map((stack, index) => (
    <h4
      className={`mt-2 px-3 py-2 bg-${stack?.color}-200 text-${stack?.color}-900 font-medium inline-block mr-3 rounded-md`}
      key={index}
    >
      {stack?.name}
    </h4>
  ));

  return (
    <>
      <ProjectHero title={title} date={date} slug={slug} />
      <div className="mt-8">
        {stackElement}
        <p className="text-lg text-slate-700 mt-4">{text}</p>
      </div>
    </>
  );
}
