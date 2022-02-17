export default function ListAbout({
  text,
  list = false,
  includeLink = false,
  link = "",
  textLink = "",
  afterLink = "",
}) {
  return (
    <div className="flex">
      {list && (
        <span className="inline-block mt-0.5 mr-2 text-slate-400 dark:text-slate-500 text-xl font-semibold transition">
          •
        </span>
      )}
      <p className="text-slate-600 dark:text-slate-300 leading-7 my-1 transition">
        {text}
        {includeLink && (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="text-sky-500 font-medium hover:text-sky-600 dark:hover:text-sky-400 hover:underline hover:underline-offset-4 transition"
          >
            {textLink}
          </a>
        )}
        {afterLink}
      </p>
    </div>
  );
}
