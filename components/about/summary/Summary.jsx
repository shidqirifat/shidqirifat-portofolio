import Title from "../../section/Title";
import Content from "../../section/Content";
import { useEffect } from "react";
import aosAnimate from "../../utils/aosAnimate";

const Link = ({ link, children }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="text-sky-500 font-medium hover:text-sky-600 dark:hover:text-sky-400 hover:underline hover:underline-offset-4 transition"
    >
      {children}
    </a>
  );
};

export default function Summary() {
  useEffect(() => {
    aosAnimate(".about");
  });

  return (
    <div className="mb-4">
      <Title mb={4}>Summary</Title>
      <Content isSummary={true}>
        I am a frontend developer with +1 year of experience and graduated from
        Jakarta State Polytechnic majoring in Electrical Engineering. Currently,
        I work as a Frontend Developer in an IT consulting company. I am used to
        translating business processes into code and producing products such as
        company landing pages, web apps, or web dashboards. <br />
        <br />
        Outside of professional activities, I often deepen my web knowledge by
        studying online classes such as the Dicoding Academy or the YouTube
        channel, experimenting with it, and sharing it in my own GitHub profile{" "}
        <Link link="https://github.com/shidqirifat">@shidqirifat</Link>.
        <br />
        <br />I have a mission to be great in my field so that I can share
        knowledge more broadly.
      </Content>
    </div>
  );
}
