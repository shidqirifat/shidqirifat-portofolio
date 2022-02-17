import React from "react";

export default function Content({ children }) {
  return (
    <>
      <p className="text-slate-600 text-lg mr-5 leading-7 mb-6">{children}</p>
    </>
  );
}
