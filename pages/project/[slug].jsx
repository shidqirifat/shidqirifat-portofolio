import { useRouter } from "next/router";
import { useState } from "react";
import { DATA } from "../../components/project/ProjectData";
import ProjectDetail from "../../components/project/ProjectDetail";

export default function Project() {
  const router = useRouter();
  const { slug } = router.query;
  const project = DATA.filter((project) => project.slug === slug)[0];

  return (
    <div className="pt-40 mb-20">
      <ProjectDetail
        date={project?.date}
        title={project?.title}
        text={project?.text}
        stacks={project?.stacks}
        slug={project?.slug}
      />
    </div>
  );
}
