export default function SubContent({ children, isProject = false }) {
  return (
    <>
      {isProject ? (
        <p className="text-slate-600 leading-6 pb-12 mt-4 ">{children}</p>
      ) : (
        <p className="text-slate-600 leading-6 mt-2">{children}</p>
      )}
    </>
  );
}
