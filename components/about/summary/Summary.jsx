import Title from "../../section/Title";
import Content from "../../section/Content";
import { useEffect } from "react";
import aosAnimate from "../../utils/aosAnimate";

export default function Summary() {
  useEffect(() => {
    aosAnimate(".about");
  });

  return (
    <div className="mb-4">
      <Title mb={4}>Summary</Title>
      <Content isSummary={true}>
        I am a frontend developer with 1+ year of experience, specializing in
        Tailwind CSS, Javascript, Typescript, and React/Next.js. I also have
        some experience in fullstack web development and basic knowledge of
        MySQL, PHP, and Node.js. I have experience to do code review, leading a
        team on a community project, strong critical thinking, and the ability
        to work effectively with teams.
      </Content>
    </div>
  );
}
