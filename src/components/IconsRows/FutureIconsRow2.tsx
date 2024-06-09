import flutter from "../../assets/svgs/flutter.svg";
import qwik from "../../assets/svgs/qwik.svg";
import rust from "../../assets/svgs/rust.svg";
import IconsRow from "./IconsRow";
import "./IconsRow.scss";

export default function FutureIconsRow2() {
  const icons = (
    <>
      <img className="aspect-square invert" src={rust} width={75} alt="" />
      <img className="rounded-md bg-white" src={qwik} width={200} alt="" />
      <img src={flutter} width={75} alt="" />
    </>
  );

  return <IconsRow>{Array(30).fill(icons)}</IconsRow>;
}
