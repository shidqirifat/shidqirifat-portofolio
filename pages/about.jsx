import Card from "../components/about/profile/Profile";
import Social from "../components/about/social/Social";
import Summary from "../components/about/summary/Summary";
import Timelines from "../components/about/timeline/Timelines";

export default function Home() {
  return (
    <div className="pt-40 flex gap-10 mb-20 flex-wrap lg:flex-nowrap">
      <div className="w-full sm:max-w-[320px] mx-auto lg:w-4/12 px-6 py-10 h-max rounded-3xl bg-slate-100 text-center">
        <Card />
      </div>
      <div className="w-full lg:w-8/12">
        <Summary />
        <Social />
        <Timelines />
      </div>
    </div>
  );
}
