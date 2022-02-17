import React from "react";

export default function Content({ children }) {
  return (
    <>
      <p className="text-slate-600 dark:text-slate-200 text-lg mr-5 leading-7 mb-6 transition">
        {children}
      </p>
    </>
  );
}
