export default function SubContent({ children, isProject = false }) {
  return (
    <>
      {isProject ? (
        <p className="text-slate-600 text-sm leading-[22px] pb-12 mt-4 ">
          {children}
        </p>
      ) : (
        <p className="text-slate-600 text-sm leading-[22px] mt-2">{children}</p>
      )}
    </>
  );
}
