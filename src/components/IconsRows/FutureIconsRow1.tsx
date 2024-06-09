import arm from "../../assets/svgs/arm.svg";
import svelte from "../../assets/svgs/svelte.svg";
import unreal from "../../assets/svgs/unreal.svg";
import zig from "../../assets/svgs/zig.svg";
import IconsRow from "./IconsRow";
import "./IconsRow.scss";

export default function FutureIconsRow1() {
  const icons = (
    <>
      <img className="aspect-square rounded-md bg-white p-1" src={unreal} width={75} alt="" />
      <img src={arm} width={125} alt="" />
      <img src={svelte} width={75} alt="" />
      <img src={zig} width={200} alt="" />
    </>
  );

  return <IconsRow>{Array(30).fill(icons)}</IconsRow>;
}
