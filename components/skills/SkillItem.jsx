import SkillIcon from "./SkillIcon";
import SubTitle from "../section/SubTitle";
import SubContent from "../section/SubContent";

export default function SkillItem({ icons, title, text }) {
  return (
    <div className="border border-slate-300 p-6 rounded-sm shadow-sm">
      <SkillIcon icons={icons} />
      <SubTitle>{title}</SubTitle>
      <SubContent>{text}</SubContent>
    </div>
  );
}