import Title from "../section/Title";
import Content from "../section/Content";

export default function Contacts() {
  return (
    <section className="pb-20">
      <Title>Contact</Title>
      <Content>
        Hello, if you interested to talk with me, I am available at any time,
        please do reach me at one of my social media below, or you can click the
        button below to send me an email, thank you!
      </Content>
      <a href="mailto:rifatpangestu87@gmail.com">
        <button className="bg-sky-500 hover:bg-sky-600 dark:bg-sky-600 dark:hover:bg-sky-500 transition-colors text-white font-semibold px-4 py-2 shadow-md rounded-md">
          Contact Me
        </button>
      </a>
    </section>
  );
}
