import React from "react";

function ButtonMenu() {
  return <div>
    <button
            className="w-12 h-12 p-3 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 sm:hidden rounded-md group transition duration-700"
            onClick={openMenu}
          >
            <MenuBar
              width="100%"
              height="100%"
              className="fill-slate-600 group-hover:fill-slate-800 dark:fill-slate-400 dark:group-hover:fill-slate-300"
            />
  </div>;
}

export default ButtonMenu;
