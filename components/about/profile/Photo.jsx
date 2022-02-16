import Image from "next/image";

function PhotoImage({ children }) {
  return (
    <>
      <div className="w-56 h-56 mx-auto relative mb-6 rounded-full overflow-hidden bg-gradient-to-br from-white to-slate-200">
        <Image
          src={`/images/${children}.png`}
          alt="Shidqi Rifat Pangestu"
          layout="fill"
          objectFit="cover"
          className="scale-110"
        />
      </div>
    </>
  );
}

function PhotoTitle({ children }) {
  return (
    <>
      <h2 className="text-slate-800 font-bold mb-1 text-xl">{children}</h2>
    </>
  );
}

function PhotoRole({ children }) {
  return (
    <>
      <h4 className="text-slate-600 text">{children}</h4>
    </>
  );
}

export { PhotoImage, PhotoTitle, PhotoRole };
