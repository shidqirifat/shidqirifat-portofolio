import Head from "next/head";
import { useRouter } from "next/router";
import { DATA } from "../../components/project/ProjectData";
import ProjectDetail from "../../components/project/ProjectDetail";

export default function Project() {
  const router = useRouter();
  const { slug } = router.query;
  const project = DATA.filter((project) => project.slug === slug)[0];

  return (
    <>
      <Head>
        <title>{project?.title} - Shidqi Rifat</title>
      </Head>
      <div className="pt-40 mb-20">
        <ProjectDetail
          date={project?.date}
          title={project?.title}
          text={project?.text}
          stacks={project?.stacks}
          features={project?.features}
          link={project?.link}
          repository={project?.repository}
          slug={project?.slug}
        />
      </div>
    </>
  );
}
