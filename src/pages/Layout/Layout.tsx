import { Outlet } from "react-router-dom";
import "./Layout.scss";
import MovingIcons from "./MovingIcons/MovingIcons";

export default function Layout() {
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
