import git from "../../assets/svgs/git.svg";
import golang from "../../assets/svgs/golang.svg";
import mongodb from "../../assets/svgs/mongodb.svg";
import postgre from "../../assets/svgs/postgre.svg";
import python from "../../assets/svgs/python.svg";
import IconsRow from "./IconsRow";
import "./IconsRow.scss";

export default function WebIconsRow2() {
  const icons = (
    <>
      <img className="h-max self-center" src={python} height={75} width={75} alt="" />
      <img className="h-max self-center rounded-md bg-white" src={mongodb} height={150} width={300} alt="" />
      <img className="h-max self-center" src={golang} height={75} width={150} alt="" />
      <img className="h-max self-center bg-white" src={postgre} height={150} width={400} alt="" />
      <img src={git} width={150} alt="" />
    </>
  );

  return <IconsRow>{Array(30).fill(icons)}</IconsRow>;
}
