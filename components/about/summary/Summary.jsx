import Title from "../../section/Title";
import Content from "../../section/Content";

export default function Summary() {
  return (
    <>
      <Title mb={4}>Summary</Title>
      <Content isSummary={true}>
        I am a software/frontend developer with 1 year of experience
        (professional), I'm very passionate about technology and computers. I am
        reliable, can work in a team, and can learn quickly my interests are in
        frontend development. In my free time, I enjoy music, gaming, and
        reading. As well, I love to travel and see new places and meet new
        people.
      </Content>
    </>
  );
}
