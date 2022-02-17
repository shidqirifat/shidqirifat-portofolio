import Title from "../section/Title";
import Content from "../section/Content";
import SkillItem from "./SkillItem";
import { DATA } from "./SkillData";

export default function Skills() {
  const skillItemElement = DATA.map((skill, index) => (
    <SkillItem
      icons={skill.icons}
      title={skill.title}
      text={skill.text}
      labels={skill.labels}
      key={index}
    />
  ));
  return (
    <section className="pb-20">
      <Title>Technical Skills</Title>
      <Content>
        I am a graduate of Electrical Engineering. In college, I don't learn
        specifics about programming languages. I became interested in web
        development when I was doing my final project. It led me to learn more
        about this knowledge further and take the opportunity to have a career
        in software development. Here is the technology I use:
      </Content>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-8">
        {skillItemElement}
      </div>
    </section>
  );
}
