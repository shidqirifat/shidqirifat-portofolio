import ListAbout from "../../section/ListAbout";
import TimelineSubTitle from "../../section/TimelineSubTitle";
import Title from "../../section/Title";
import TimelineItem from "./TimelineItem";
import { DATA } from "./TimelineData";

export default function Timelines() {
  const timelineElement = DATA.map((tl) => (
    <TimelineItem year={tl.year} data={tl.data} key={tl.year} />
  ));

  return (
    <div className="about">
      <Title mb={4}>
        <span className="text-neutral-50">🌱</span> - Timeline
      </Title>
      <ListAbout
        text="More detail download "
        includeLink={true}
        link="/resume/resume.pdf"
        textLink="My Resume"
        afterLink="."
        resume={true}
      />
      {timelineElement}
    </div>
  );
}
