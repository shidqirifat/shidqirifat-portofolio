import ProjectHero from "./ProjectHero";
import ListFeatutes from "./ListFeatutes";
import ProjectDetailAnchor from "./ProjectDetailAnchor";
import { useEffect } from "react";
import { gsap } from "gsap";

export default function ProjectDetail({
  date,
  title,
  text,
  slug,
  stacks,
  features,
  link = false,
  repository = false,
}) {
  useEffect(() => {
    gsap.from(".project-hero", {
      y: 60,
      opacity: 0,
      duration: 0.3,
    });
    gsap.from(".project-stacks", {
      y: 20,
      opacity: 0,
      duration: 0.3,
      delay: 0.3,
      stagger: 0.8,
    });
    gsap.from(".project-detail", {
      y: 60,
      opacity: 0,
      duration: 0.25,
      delay: 0.3,
      stagger: 0.3,
    });
    gsap.from(".project-anchors", {
      y: 60,
      opacity: 0,
      duration: 0.25,
      delay: 0.7,
      stagger: 0.8,
    });
  }, []);

  const stackElement = stacks?.map((stack, index) => (
    <h4
      className={`mt-2 px-3 py-2 bg-${stack?.color}-200 text-${stack?.color}-900 font-medium inline-block mr-3 rounded-md transition`}
      key={index}
    >
      {stack?.name}
    </h4>
  ));

  const listFeaturesElement = features?.map((feature, index) => (
    <ListFeatutes key={index}>{feature}</ListFeatutes>
  ));

  return (
    <>
      <ProjectHero title={title} date={date} slug={slug} />
      <div className="mt-8">
        <div className="project-stacks">{stackElement}</div>
        <div className="project-detail">
          <h3 className="text-xl font-medium text-slate-700 dark:text-slate-300 mt-6 mb-3 transition">
            About:{" "}
          </h3>
          <p className="text-lg text-slate-700 dark:text-slate-400 mb-6 mr-4 leading-7 transition">
            {text}
          </p>
          {features && (
            <h3 className="text-xl font-medium text-slate-700 dark:text-slate-300 my-2 transition">
              Features:{" "}
            </h3>
          )}
        </div>
        <div className="mb-6 project-detail">{listFeaturesElement}</div>
        <ProjectDetailAnchor link={link} repository={repository} />
      </div>
    </>
  );
}
