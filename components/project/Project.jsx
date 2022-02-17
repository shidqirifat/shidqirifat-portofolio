import LinkAnchor from "../link/LinkAnchor";
import Title from "../section/Title";
import Content from "../section/Content";
import ProjectCard from "./ProjectCard";
import { useRouter } from "next/router";
import { DATA } from "./ProjectData";

export default function Project() {
  const router = useRouter();
  const inRoute = router.pathname == "/project" ? true : false;

  const projectItemELement = DATA.map((project, index) => (
    <ProjectCard
      date={project.date}
      title={project.title}
      text={project.text}
      link={project.link}
      slug={project.slug}
      key={index}
    />
  ));

  return (
    <div className="mb-20">
      <Title>Project That I Have Build</Title>
      <Content>
        I always looking for new challenges, and always trying to improve
        myself. Here's a list of my projects you might be interested in.
      </Content>
      <div className="flex gap-8 flex-col">{projectItemELement}</div>
      {!inRoute && (
        <div className="group cursor-pointer w-max mt-4">
          <LinkAnchor link="/project" symbol="➡">
            View all projects
          </LinkAnchor>
        </div>
      )}
    </div>
  );
}
