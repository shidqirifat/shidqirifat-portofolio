import NavItem from "./NavItem";
import { useTheme } from "next-themes";
import LightMode from "../../public/icons/light-mode.svg";
import DarkMode from "../../public/icons/dark-mode.svg";
import MenuBar from "../../public/icons/menu-bar.svg";
import { useState } from "react";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [menuActive, setMenuActive] = useState();

  function openMenu() {
    setMenuActive(!menuActive);
  }

  return (
    <>
      <div className="fixed z-40 w-full h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
      <header className="py-2 fixed w-full bg-slate-50/90 dark:bg-slate-900/90 backdrop-blur-sm z-30 px-3 sm:px-6 transition duration-700">
        <div className="flex justify-start gap-2 sm:justify-between flex-row-reverse sm:flex-row items-center max-w-4xl mx-auto h-16">
          <ul
            className={`flex flex-col gap-2 fixed sm:static ${
              menuActive
                ? "opacity-100 w-56 h-max"
                : "w-0 h-0 opacity-0 sm:opacity-100 sm:w-full sm:h-full"
            } rounded-md shadow-md sm:shadow-none top-[80px] right-3 py-2 sm:right-0 sm:top-0 sm:w-full sm:h-full bg-slate-100 dark:bg-slate-800 sm:bg-slate-50 sm:dark:bg-slate-900 sm:flex sm:flex-row sm:gap-16 transition-colors duration-700`}
          >
            <NavItem link="/" activeLink="" openMenu={openMenu}>
              Home
            </NavItem>
            <NavItem link="/project" activeLink="project" openMenu={openMenu}>
              Project
            </NavItem>
            <NavItem link="/about" activeLink="about" openMenu={openMenu}>
              About
            </NavItem>
          </ul>
          <button
            className="w-12 h-12 p-3 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 sm:hidden rounded-md group transition duration-700"
            onClick={openMenu}
          >
            <MenuBar
              width="100%"
              height="100%"
              className="fill-slate-600 group-hover:fill-slate-800 dark:fill-slate-400 dark:group-hover:fill-slate-300"
            />
          </button>
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-12 h-12 p-3 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-md group transition duration-700"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <LightMode
                width="100%"
                height="100%"
                className="fill-slate-400 group-hover:fill-slate-300 transition duration-700"
              />
            ) : (
              <DarkMode
                width="100%"
                height="100%"
                className="fill-slate-600 group-hover:fill-slate-800 transition duration-700"
              />
            )}
          </button>
        </div>
      </header>
    </>
  );
}
