import { useEffect } from "react";
import aosAnimate from "../utils/aosAnimate";

export default function Content({ children }) {
  useEffect(() => {
    aosAnimate("#content-section");
  });

  return (
    <>
      <p
        id="content-section"
        className="about text-slate-600 dark:text-slate-200 text-lg mr-5 leading-7 mb-6 transition"
      >
        {children}
      </p>
    </>
  );
}
