export default function SubContent({ children, isProject = false }) {
  return (
    <>
      {isProject ? (
        <p className="text-slate-600 dark:text-slate-300 leading-6 pb-12 mt-4 transition">
          {children}
        </p>
      ) : (
        <p className="text-slate-600 dark:text-slate-300 leading-6 mt-2 transition">
          {children}
        </p>
      )}
    </>
  );
}
