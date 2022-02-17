import Link from "next/link";

export default function LinkAnchor({
  link,
  textNormal = false,
  external = false,
  symbol = "↗",
  children,
}) {
  const AnchorElement = external ? (
    <a
      href={`http://${link}`}
      target="_blank"
      rel="noreferrer"
      className={`text-sky-500 ${
        !textNormal && "text-sm"
      } font-semibold group-hover:underline transition group-hover:underline-offset-4 group-hover:text-sky-600 dark:group-hover:text-sky-400 duration-700`}
    >
      {children}
    </a>
  ) : (
    <Link href={link}>
      <a className="text-lg text-sky-500 font-semibold group-hover:underline transition group-hover:underline-offset-4 group-hover:text-sky-600 dark:group-hover:text-sky-400  duration-700">
        {children}
      </a>
    </Link>
  );

  const stopPropagation = (e) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  };

  return (
    <span onClick={stopPropagation}>
      {AnchorElement}
      <span className="ml-1 text-2xl text-sky-500 group-hover:text-sky-600 dark:group-hover:text-sky-400 font-semibold relative top-[3px] group-hover:left-1 transition duration-700">
        {symbol}
      </span>
    </span>
  );
}
