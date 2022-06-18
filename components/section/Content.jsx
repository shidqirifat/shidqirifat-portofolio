import { useEffect } from "react";
import aosAnimate from "../utils/aosAnimate";

export default function Content({ style, children }) {
    useEffect(() => {
        aosAnimate(".content-section");
    });

    return (
        <>
            <p
                style={style}
                className="content-section about text-slate-600 dark:text-slate-200 text-lg mr-5 leading-7 mb-6 transition-all duration-500"
            >
                {children}
            </p>
        </>
    );
}
