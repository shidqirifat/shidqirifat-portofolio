import ProjectHero from "./ProjectHero";
import ListFeatutes from "./ListFeatutes";
import ProjectDetailAnchor from "./ProjectDetailAnchor";

export default function ProjectDetail({
  date,
  title,
  text,
  slug,
  stacks,
  features,
  link = false,
  repository = false,
}) {
  const stackElement = stacks?.map((stack, index) => (
    <h4
      className={`mt-2 px-3 py-2 bg-${stack?.color}-200 text-${stack?.color}-900 font-medium inline-block mr-3 rounded-md`}
      key={index}
    >
      {stack?.name}
    </h4>
  ));

  const listFeaturesElement = features?.map((feature, index) => (
    <ListFeatutes key={index}>{feature}</ListFeatutes>
  ));

  return (
    <>
      <ProjectHero title={title} date={date} slug={slug} />
      <div className="mt-8">
        <div>{stackElement}</div>
        <h3 className="text-xl font-medium text-slate-700 mt-6 mb-3">
          About:{" "}
        </h3>
        <p className="text-lg text-slate-700 mb-6 mr-4 leading-7">{text}</p>
        <h3 className="text-xl font-medium text-slate-700 my-2">Features: </h3>
        <div className="mb-6">{listFeaturesElement}</div>
        <ProjectDetailAnchor link={link} repository={repository} />
      </div>
    </>
  );
}
