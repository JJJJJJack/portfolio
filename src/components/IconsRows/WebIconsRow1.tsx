import docker from "../../assets/svgs/docker.svg";
import jest from "../../assets/svgs/jest.svg";
import react from "../../assets/svgs/react.svg";
import typescript from "../../assets/svgs/typescript.svg";
import IconsRow from "./IconsRow";
import "./IconsRow.scss";

export default function WebIconsRow1() {
  const icons = (
    <>
      <img className="h-max self-center" src={react} width={75} alt="" />
      <img className="h-max self-center" src={typescript} width={75} alt="" />
      <img className="h-max self-center" src={jest} width={75} alt="" />
      <img src={docker} alt="Docker" width={75} />
    </>
  );

  return <IconsRow>{Array(30).fill(icons)}</IconsRow>;
}
