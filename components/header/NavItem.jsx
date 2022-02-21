import Link from "next/link";
import { useRouter } from "next/router";

export default function NavItem({ children, link, activeLink, openMenu }) {
  const router = useRouter();
  const path = router.pathname.split("/")[1];
  const active =
    path === activeLink
      ? "bg-slate-200 dark:bg-slate-700 sm:bg-slate-50/0 sm:dark:bg-slate-900/0 border-[3px] border-sky-400 sm:border-0 text-black dark:text-slate-100 font-medium transition duration-700"
      : "text-slate-600 dark:text-slate-200 transition duration-700";

  return (
    <li>
      <Link href={link}>
        <a
          className={`p-4 hover:bg-slate-200 hover:dark:bg-slate-700 sm:hover:bg-slate-50 sm:hover:dark:bg-slate-900 sm:px-0 sm:py-4 cursor-pointer block relative
            ${active}`}
          onClick={() => setTimeout(() => openMenu(), 150)}
        >
          {children}
          {path === activeLink && (
            <span className="hidden sm:block sm:absolute text-3xl font-bold text-black dark:text-slate-50 left-1/2 -translate-x-1/2 -bottom-2 transition duration-700">
              .
            </span>
          )}
        </a>
      </Link>
    </li>
  );
}
