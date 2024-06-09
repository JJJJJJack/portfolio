import dotnet from "../../assets/svgs/dotnet.svg";
import cpu64 from "../../assets/svgs/cpu64.svg";
import IconsRow from "./IconsRow";
import dll from "../../assets/svgs/dll.svg";
import "./IconsRow.scss";

export default function LowLevelIconsRow2() {
  const icons = (
    <>
      <img className="aspect-square" src={dotnet} width={75} alt="" />
      <img className="aspect-square invert" src={dll} width={75} alt="" />
      <img className="aspect-square" src={cpu64} height={75} width={75} alt="" />
    </>
  );

  return <IconsRow>{Array(30).fill(icons)}</IconsRow>;
}
