import SkillIcon from "./SkillIcon";
import SubTitle from "../section/SubTitle";
import SubContent from "../section/SubContent";

export default function SkillItem({ icons, title, text, labels }) {
  return (
    <div className="border border-slate-300 dark:border-slate-500 p-6 rounded-sm shadow-sm transition duration-700">
      <SkillIcon icons={icons} labels={labels} />
      <SubTitle>{title}</SubTitle>
      <SubContent>{text}</SubContent>
    </div>
  );
}
