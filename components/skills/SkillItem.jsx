import SkillIcon from "./SkillIcon";
import SubTitle from "../section/SubTitle";
import SubContent from "../section/SubContent";
import { useEffect } from "react";
import aosAnimate from "../utils/aosAnimate";

export default function SkillItem({ icons, title, text, labels }) {
  useEffect(() => {
    aosAnimate(".skill-item");
  }, []);

  return (
    <div className="skill-item border border-slate-300 dark:border-slate-500 p-6 rounded-sm shadow-sm transition duration-700">
      <SkillIcon icons={icons} labels={labels} />
      <SubTitle>{title}</SubTitle>
      <SubContent>{text}</SubContent>
    </div>
  );
}
