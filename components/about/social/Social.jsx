import ListAbout from "../../section/ListAbout";
import Title from "../../section/Title";
import { DATA } from "./SocialData";

export default function Social() {
  const socialItemElement = DATA.map((social, index) => (
    <ListAbout
      text={social.text}
      includeLink={social.includeLink}
      link={social.link}
      textLink={social.textLink}
      key={index}
    />
  ));

  return (
    <div className="about">
      <Title mb={4}>
        <span className="text-neutral-50">🧑‍💻</span> - Profile
      </Title>
      <div className="mt-2">{socialItemElement}</div>
    </div>
  );
}
