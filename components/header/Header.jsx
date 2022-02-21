import { useState } from "react";
import { ButtonMenu, ButtonTheme } from "./ButtonHeader";
import Navigation from "./Navigation";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function Header() {
  const [menuActive, setMenuActive] = useState();
  const { theme, setTheme } = useTheme();

  function openMenu() {
    setMenuActive(!menuActive);
  }

  return (
    <>
      <div className="fixed z-40 w-full h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
      <header className="pt-4 pb-2 fixed w-full bg-slate-50/90 dark:bg-slate-900/90 backdrop-blur-sm z-30 px-3 sm:px-6 shadow-md transition duration-700">
        <div className="max-w-4xl mx-auto h-16 flex justify-between sm:justify-start items-center gap-8 relative">
          <div className="relative w-12 h-12">
            <Image
              src={`/icons/${theme === "dark" ? "logo" : "logo-light"}.png`}
              layout="fill"
              alt="Logo"
            />
          </div>
          <div className="flex justify-start gap-2 sm:justify-between flex-row-reverse sm:flex-row items-center">
            <Navigation openMenu={openMenu} menuActive={menuActive} />
            <div className="absolute right-0 flex gap-3">
              <ButtonTheme setTheme={setTheme} theme={theme} />
              <ButtonMenu openMenu={openMenu} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
