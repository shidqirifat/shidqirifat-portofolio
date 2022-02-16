import Image from "next/image";

export default function SkillIcon({ icons }) {
  const Icon = icons.map((icon, index) => (
    <Image
      src={`/icons/${icon}.svg`}
      alt={`${icon}-logo`}
      width={35}
      height={35}
      key={index}
    />
  ));

  return <div className="flex gap-3 mb-3">{Icon}</div>;
}
