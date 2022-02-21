import Head from "next/head";
import Hero from "../components/hero/Hero";
import Project from "../components/project/Project";
import Skills from "../components/skills/Skills";
import Contacts from "../components/contacts/Contacts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Shidqi Rifat - Homepage</title>
      </Head>
      <Hero />
      <Skills />
      <Project inHome={true} />
      <Contacts />
    </>
  );
}
