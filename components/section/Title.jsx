import { useEffect } from "react";
import aosAnimate from "../utils/aosAnimate";

export default function TitleSection({ children, mb = 0 }) {
  useEffect(() => {
    aosAnimate("#title-section");
  });

  return (
    <>
      <h2
        id="title-section"
        className={`mt-6 ${
          mb === 0 ? "mb-6" : `mb-${mb}`
        } text-transparent font-semibold text-2xl bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500`}
      >
        {children}
      </h2>
    </>
  );
}
