import GitHub from "../../public/icons/github.svg";
import Web from "../../public/icons/web.svg";
import LinkAnchor from "../link/LinkAnchor";

export default function ProjectDetailAnchor({ link, repository = false }) {
  let textRepo = "";
  if (repository) {
    const linkRepo = repository.split("/");
    textRepo = `@${linkRepo[1]}/${linkRepo[2]}`;
  }

  return (
    <>
      {(link || repository) && (
        <div className="project-anchors">
          <h3 className="text-xl font-medium text-slate-700 dark:text-slate-300 my-2 transition ">
            Link:{" "}
          </h3>
          <div className="flex flex-wrap md:gap-8 lg:flex-nowrap items-center">
            {link && (
              <>
                <p className="group text-lg inline">
                  <LinkAnchor
                    link={link}
                    symbol=""
                    external={true}
                    textNormal={true}
                  >
                    <Web className="fill-slate-700 group-hover:fill-slate-900 dark:fill-slate-500 dark:group-hover:fill-slate-400 w-8 inline-block mr-4 transition" />
                    {link}
                  </LinkAnchor>
                </p>
              </>
            )}
            {repository && (
              <>
                <p className="group text-lg inline">
                  <LinkAnchor
                    link={repository}
                    symbol=""
                    external={true}
                    textNormal={true}
                  >
                    <GitHub className="fill-slate-700 group-hover:fill-slate-900 dark:fill-slate-500 dark:group-hover:fill-slate-400 w-8 inline-block mr-4 transition" />
                    {textRepo}
                  </LinkAnchor>
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
