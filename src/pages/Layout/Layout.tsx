import { Outlet } from "react-router-dom";
import "./Layout.scss";
import MovingIcons from "./MovingIcons/MovingIcons";
import { ViewCtx } from "../../App";
import { useContext, useEffect } from "react";

export default function Layout() {
  const {
    currentSectionState: [currentSection, _],
  } = useContext(ViewCtx);

  useEffect(() => {
    if (currentSection === "Projects") {
      document.querySelector("body")?.classList.add("dark");
      return;
    }

    document.querySelector("body")?.classList.remove("dark");
  }, [currentSection]);

  return (
    <>
      <section className="h-full w-full">
        <div className="fixed left-0" id="stars" />
        <div className="fixed left-0" id="stars2" />
        <div className="fixed left-0" id="stars3" />
        <MovingIcons />
        <main className="relative flex flex-col gap-y-4">
          <Outlet />
        </main>
      </section>
    </>
  );
}
