import React from "react";

export default function ListFeatutes({ children }) {
  return (
    <div className="flex">
      <span className="inline-block mt-0.5 mr-2 text-slate-400 dark:text-slate-500 text-xl font-semibold transition">
        •
      </span>
      <p className="text-slate-700 dark:text-slate-400 text-lg leading-7 my-1 transition">
        {children}
      </p>
    </div>
  );
}
