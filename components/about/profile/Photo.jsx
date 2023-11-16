import Image from "next/image";

function PhotoImage({ children }) {
  return (
    <>
      <div className="w-56 h-56 mx-auto relative mb-6 rounded-full overflow-hidden transition duration-700">
        <Image
          src={`/images/${children}.png`}
          alt="Shidqi Rifat Pangestu"
          layout="fill"
          objectFit="cover"
          className="scale-105"
          priority
        />
      </div>
    </>
  );
}

function PhotoTitle({ children }) {
  return (
    <>
      <h2 className="text-slate-800 dark:text-slate-200 font-bold mb-2 text-xl transition">
        {children}
      </h2>
    </>
  );
}

function PhotoRole({ children }) {
  return (
    <>
      <h4 className="text-slate-600 dark:text-slate-400 transition">
        {children}
      </h4>
    </>
  );
}

export { PhotoImage, PhotoTitle, PhotoRole };
