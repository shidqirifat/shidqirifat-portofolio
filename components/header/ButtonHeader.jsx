/* eslint-disable react-hooks/exhaustive-deps */
import MenuBar from "../../public/icons/menu-bar.svg";
import LightMode from "../../public/icons/light-mode.svg";
import DarkMode from "../../public/icons/dark-mode.svg";
import { useEffect } from "react";

function ButtonMenu({ openMenu }) {
  return (
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
  );
}

function ButtonTheme({ setTheme, theme }) {
  useEffect(() => {
    switchTheme();
  }, []);

  function switchTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="w-12 h-12 p-3 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-md group transition duration-700"
      onClick={switchTheme}
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
  );
}

export { ButtonMenu, ButtonTheme };
