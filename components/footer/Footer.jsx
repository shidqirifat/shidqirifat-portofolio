import SocialIcon from "./SocialIcon";
import Title from "../section/Title";

export default function Footer() {
  return (
    <div className="px-8 pb-14 mt-4 border-t border-slate-300">
      <div className="text-center">
        <Title>Let's Connect</Title>
      </div>
      <div className="grid grid-cols-4 gap-1 w-48 mx-auto my-6">
        <SocialIcon icon="email" link="mailto:rifatpangestu87@gmail.com" />
        <SocialIcon
          icon="linkedin"
          link="https://www.linkedin.com/in/shidqirifatpangestu/"
        />
        <SocialIcon icon="github" link="https://github.com/shidqirifat" />
        <SocialIcon
          icon="instagram"
          link="https://instagram.com/shidqirifat19/"
        />
      </div>
      <p className="text-slate-600 dark:text-slate-300 text-center text-sm transition duration-700">
        © 2022 - Shidqi Rifat Pangestu
      </p>
    </div>
  );
}
