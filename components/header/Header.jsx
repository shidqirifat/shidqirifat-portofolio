import NavItem from "./NavItem";
import { useTheme } from "next-themes";
import LightMode from "../../public/icons/light-mode.svg";
import DarkMode from "../../public/icons/dark-mode.svg";

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <div className="fixed z-40 w-full h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
      <header className="py-2 fixed w-full bg-slate-50/90 dark:bg-slate-900/90 backdrop-blur-sm z-30 px-6 transition duration-700">
        <div className="flex justify-between items-center max-w-4xl mx-auto h-16">
          <ul className="flex gap-8 sm:gap-16">
            <NavItem link="/" activeLink="">
              Home
            </NavItem>
            <NavItem link="/project" activeLink="project">
              Project
            </NavItem>
            <NavItem link="/about" activeLink="about">
              About
            </NavItem>
          </ul>
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-12 h-12 p-3 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-md group transition duration-700"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme !== "dark" ? (
              <DarkMode
                width="100%"
                height="100%"
                className="fill-slate-600 group-hover:fill-slate-800 transition duration-700"
              />
            ) : (
              <LightMode
                width="100%"
                height="100%"
                className="fill-slate-400 group-hover:fill-slate-300 transition duration-700"
              />
            )}
          </button>
        </div>
      </header>
    </>
  );
}
