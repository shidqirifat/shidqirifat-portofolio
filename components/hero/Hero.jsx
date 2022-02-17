import LinkAnchor from "../link/LinkAnchor";

export default function Hero() {
  return (
    <div className="flex flex-col justify-center min-h-screen">
      <h1 className="text-transparent text-4xl font-bold mb-6 bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        Hello, I'm Shidqi <span className="text-neutral-50">👋</span>
      </h1>
      <p className="text-slate-600 text-xl w-4/5 leading-8">
        I'm Frontend Developer. Currently learning everything. I publish my
        result learning and experiment project on Github.
      </p>
      <div className="group cursor-pointer w-max mt-4">
        <LinkAnchor link="/about" symbol="➡">
          See my full profile
        </LinkAnchor>
      </div>
    </div>
  );
}
