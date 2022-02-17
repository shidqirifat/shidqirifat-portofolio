import Image from "next/image";

export default function SocialIcon({ icon, link }) {
  return (
    <>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="w-6 h-6 relative group "
      >
        <Image
          src={`/icons/${icon}.svg`}
          alt={icon}
          layout="fill"
          className="invert-[20%] group-hover:invert-0 dark:group-hover:invert-[80%] dark:invert transition duration-700"
        />
      </a>
    </>
  );
}
