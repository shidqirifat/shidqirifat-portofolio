import Title from "../../section/Title";
import Content from "../../section/Content";

export default function Summary() {
  return (
    <div className="about mb-4">
      <Title mb={4}>Summary</Title>
      <Content isSummary={true}>
        I am a software/frontend developer and fresh graduate last year. After
        graduating, I actively learn in online classes and internships to deepen
        my knowledge about frontend development. I am very passionate about
        technology and computers. I am reliable, can work in a team, and can
        learn quickly my interests are in frontend development. In my free time,
        I keep up with the news of computer technology, play games, and read
        books.
      </Content>
    </div>
  );
}
