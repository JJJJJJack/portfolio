import cs from "../../assets/svgs/cs.svg";
import IconsRow from "./IconsRow";
import audacity from "../../assets/svgs/audacity.svg";

export default function GameDevIconsRow1() {
  const icons = (
    <>
      <img className="aspect-square" src={cs} width={75} alt="" />
      <img className="aspect-square bg-white" src={audacity} width={75} alt="" />
    </>
  );
  return <IconsRow>{Array(30).fill(icons)}</IconsRow>;
}
