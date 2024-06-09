import unity from "../../assets/svgs/unity.svg";
import godot from "../../assets/svgs/godot.svg";
import IconsRow from "./IconsRow";

export default function GameDevIconsRow2() {
  const icons = (
    <>
      <img className="invert" src={unity} width={180} alt="" />
      <img className="aspect-square" src={godot} width={75} alt="" />
    </>
  );
  return <IconsRow>{Array(30).fill(icons)}</IconsRow>;
}
