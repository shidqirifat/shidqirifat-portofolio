import React from "react";

export default function Content({ children }) {
  return (
    <>
      <p className="text-slate-600 mr-5 md:mr-0 leading-7 mb-6">{children}</p>
    </>
  );
}
