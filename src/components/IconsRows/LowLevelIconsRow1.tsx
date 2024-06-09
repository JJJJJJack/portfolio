import c from "../../assets/svgs/c.svg";
import cpp from "../../assets/svgs/cpp.svg";
import IconsRow from "./IconsRow";
import exe from "../../assets/svgs/exe.svg";
import "./IconsRow.scss";

export default function LowLevelIconsRow1() {
  const icons = (
    <>
      <img className="aspect-square" src={c} width={75} alt="" />
      <img className="aspect-square invert" src={exe} width={75} alt="" />
      <img className="aspect-square" src={cpp} height={75} width={75} alt="" />
    </>
  );

  return <IconsRow>{Array(30).fill(icons)}</IconsRow>;
}
