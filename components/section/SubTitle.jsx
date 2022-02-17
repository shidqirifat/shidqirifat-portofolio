export default function SubTitle({ children }) {
  return (
    <>
      <h2 className="text-slate-700 dark:text-slate-200 font-semibold mt-5 sm:mt-0 transition">
        {children}
      </h2>
    </>
  );
}
