import Head from "next/head";
import Project from "../../components/project/Project";

export default function Home() {
  return (
    <>
      <Head>
        <title>Project - Shidqi Rifat</title>
      </Head>
      <div className="pt-40">
        <Project />
      </div>
    </>
  );
}
