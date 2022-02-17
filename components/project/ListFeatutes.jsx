import React from "react";

export default function ListFeatutes({ children }) {
  return (
    <div className="flex">
      <span className="inline-block mt-0.5 mr-2 text-slate-400 text-xl font-semibold">
        •
      </span>
      <p className="text-slate-700 text-lg leading-7 my-1">{children}</p>
    </div>
  );
}
