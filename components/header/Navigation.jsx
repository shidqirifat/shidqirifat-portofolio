import NavItem from "./NavItem";

export default function Navigation({ menuActive, openMenu }) {
  return (
    <ul
      className={`flex flex-col gap-2 fixed sm:static ${
        menuActive
          ? "opacity-100 w-56 h-max"
          : "w-0 h-0 opacity-0 sm:opacity-100 sm:w-full sm:h-full"
      } rounded-md shadow-md sm:shadow-none top-[80px] right-3 py-2 sm:right-0 sm:top-0 sm:w-full sm:h-full bg-slate-100 dark:bg-slate-800 sm:bg-slate-50/0 sm:dark:bg-slate-900/0 sm:flex sm:flex-row sm:gap-16 transition-colors duration-700`}
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
  );
}
