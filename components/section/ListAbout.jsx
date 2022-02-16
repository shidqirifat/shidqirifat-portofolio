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
        <span className="inline-block mt-0.5 mr-2 text-slate-400 text-xl font-semibold">
          •
        </span>
      )}
      <p className="text-slate-600 leading-7 my-1">
        {text}
        {includeLink && (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="text-sky-500 font-medium hover:text-sky-600 hover:underline hover:underline-offset-4"
          >
            {textLink}
          </a>
        )}
        {afterLink}
      </p>
    </div>
  );
}
