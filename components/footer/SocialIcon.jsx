import Image from "next/image";

export default function SocialIcon({ icon, link }) {
  return (
    <>
      <a href={link} target="_blank" rel="noreferrer" className="w-6 h-6">
        <Image
          src={`/icons/${icon}.svg`}
          alt={icon}
          className="brightness-100 hover:brightness-75"
          width={30}
          height={30}
        />
      </a>
    </>
  );
}
