import { useContext, useMemo } from "react";
import { ViewCtx } from "../../../App";
import FutureIconsRows from "../../../components/IconsRows/FutureIconsRows";
import GameDevIconsRows from "../../../components/IconsRows/GameDevIconsRows";
import LowLevelIconsRows from "../../../components/IconsRows/LowLevelIconsRows";
import WebIconsRows from "../../../components/IconsRows/WebIconsRows";
import "./MovingIcons.scss";

export default function MovingIcons() {
  const {
    currentSectionState: [currentSection, _],
  } = useContext(ViewCtx);

  const inLowLevelSection = useMemo(() => currentSection.includes("LowLevel"), [currentSection]);
  const inWebSection = useMemo(() => currentSection.includes("Web"), [currentSection]);
  const inGameDevSection = useMemo(() => currentSection.includes("GameDev"), [currentSection]);
  const inFutureSection = useMemo(() => currentSection.includes("Future"), [currentSection]);

  return (
    <>
      <div
        className={`animation-container fixed top-10 flex h-[200%] w-[150%] -translate-y-96 select-none flex-col gap-4 overflow-hidden ${
          inLowLevelSection ? "appear" : "disappear"
        }`}
      >
        <LowLevelIconsRows />
      </div>
      <div
        className={`animation-container fixed top-10 flex h-[200%] w-[150%] -translate-y-96 select-none flex-col gap-4 overflow-hidden ${
          inWebSection ? "appear" : "disappear"
        }`}
      >
        <WebIconsRows />
      </div>
      <div
        className={`animation-container fixed top-10 flex h-[200%] w-[150%] -translate-y-96 select-none flex-col gap-4 overflow-hidden ${
          inGameDevSection ? "appear" : "disappear"
        }`}
      >
        <GameDevIconsRows />
      </div>
      <div
        className={`animation-container fixed top-10 flex h-[200%] w-[150%] -translate-y-96 select-none flex-col gap-4 overflow-hidden ${
          inFutureSection ? "appear" : "disappear"
        }`}
      >
        <FutureIconsRows />
      </div>
    </>
  );
}
