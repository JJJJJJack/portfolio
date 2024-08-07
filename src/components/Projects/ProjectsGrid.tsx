import { useEffect } from "react";
import CardGrid from "../CardGrid/CardGrid";

export default function ProjectsGrid() {
  useEffect(() => {
    document.getElementById("cards").onmousemove = e => {
      for (const card of document.getElementsByClassName("card")) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

        (card as HTMLObjectElement).style.setProperty("--mouse-x", `${x}px`);
        (card as HTMLObjectElement).style.setProperty("--mouse-y", `${y}px`);
      }
    };
  }, []);
  return (
    <section className="flex w-full animate-b justify-center">
      <CardGrid />
    </section>
  );
}
