import TimelineSubTitle from "../../section/TimelineSubTitle";
import ListAbout from "../../section/ListAbout";

export default function TimelineItem({ year, data }) {
  const dataTimelineElement = data.map((tl, index) => (
    <ListAbout
      list={tl.list}
      text={tl.text}
      includeLink={tl.includeLink}
      link={tl.link}
      textLink={tl.textLink}
      afterLink={tl.afterLink}
      key={index}
    />
  ));

  return (
    <div className="mt-4">
      <TimelineSubTitle>{year}</TimelineSubTitle>
      <div className="ml-[70px]">{dataTimelineElement}</div>
    </div>
  );
}
