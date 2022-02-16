import NavItem from "./NavItem";

export default function Header() {
  return (
    <>
      <div className="fixed z-40 w-full h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
      <header className="py-2 fixed w-full bg-white/90 backdrop-blur-sm z-30 px-6">
        <ul className="max-w-4xl mx-auto flex gap-16">
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
      </header>
    </>
  );
}
