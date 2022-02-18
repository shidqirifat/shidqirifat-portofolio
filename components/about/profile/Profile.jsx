import { PhotoImage, PhotoRole, PhotoTitle } from "./Photo";

export default function Card() {
  return (
    <div className="about">
      <PhotoImage>shidqi</PhotoImage>
      <PhotoTitle>Shidqi Rifat Pangestu</PhotoTitle>
      <PhotoRole>Frontend Developer</PhotoRole>
      <PhotoRole>Politeknik Negeri Jakarta</PhotoRole>
    </div>
  );
}
