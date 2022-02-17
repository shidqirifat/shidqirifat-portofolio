import Image from "next/image";

export default function SkillIcon({ icons, labels }) {
  const Icon = icons.map((icon, index) => (
    <div key={index} className="h-9 w-9 relative group overflow-visible">
      <Image
        src={`/icons/${icon}.svg`}
        alt={`${icon}-logo`}
        layout="fill"
        className={`brightness-100 group-hover:brightness-105 transition ${
          icon === "next-js" && "dark:invert"
        }`}
      />
      <div className="absolute left-1/2 -translate-x-1/2 -bottom-10 px-2 py-1 text-sm rounded-sm shadow-lg bg-slate-700 text-slate-100 invisible group-hover:visible transition">
        {labels[index]}
      </div>
    </div>
  ));

  return <div className="flex gap-3 mb-3">{Icon}</div>;
}
