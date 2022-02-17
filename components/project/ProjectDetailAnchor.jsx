import GitHub from "../../public/icons/github.svg";
import Web from "../../public/icons/web.svg";
import LinkAnchor from "../link/LinkAnchor";

export default function ProjectDetailAnchor({ link, repository }) {
  return (
    <>
      {(link || repository) && (
        <div>
          <h3 className="text-xl font-medium text-slate-700 my-2">Link: </h3>
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
                    <Web className="fill-slate-700 group-hover:fill-slate-900 w-8 inline-block mr-4 transition" />
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
                    <GitHub className="fill-slate-700 group-hover:fill-slate-900 w-8 inline-block mr-4 transition" />
                    {repository}
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
