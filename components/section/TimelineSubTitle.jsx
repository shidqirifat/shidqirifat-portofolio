export default function TimelineSubTitle({ children }) {
  return (
    <div className="flex items-center gap-3">
      <h2 className="w-max text-slate-800 font-semibold text-2xl">
        {children}
      </h2>
      <div className="relative -top-1 border-b-[1.5px] h-1 w-full border-slate-300 p-1"></div>
    </div>
  );
}
