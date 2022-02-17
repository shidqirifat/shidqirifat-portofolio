import Link from "next/link";
import { useRouter } from "next/router";

export default function NavItem({ children, link, activeLink }) {
  const router = useRouter();
  const path = router.pathname.split("/")[1];
  const active =
    path === activeLink
      ? "text-black dark:text-slate-100 font-medium transition duration-700"
      : "text-slate-600 dark:text-slate-200 transition duration-700";

  return (
    <li>
      <Link href={link}>
        <a
          className={`py-4 cursor-pointer block relative
            ${active}`}
        >
          {children}
          {path === activeLink && (
            <span className="text-3xl font-bold text-black dark:text-slate-50 absolute left-1/2 -translate-x-1/2 -bottom-2 transition duration-700">
              .
            </span>
          )}
        </a>
      </Link>
    </li>
  );
}
