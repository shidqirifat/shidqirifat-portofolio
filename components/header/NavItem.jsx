import Link from "next/link";
import { useRouter } from "next/router";

export default function NavItem({ children, link, activeLink }) {
  const router = useRouter();
  const path = router.pathname.split("/")[1];
  const active =
    path === activeLink ? "text-black font-medium" : "text-slate-600";

  return (
    <li>
      <Link href={link}>
        <a
          className={`py-4 cursor-pointer block relative
            ${active}`}
        >
          {children}
          {path === activeLink && (
            <span className="text-3xl font-bold text-black absolute left-1/2 -translate-x-1/2 -bottom-2">
              .
            </span>
          )}
        </a>
      </Link>
    </li>
  );
}
