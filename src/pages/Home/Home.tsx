import { useEffect, useMemo, useRef } from "react";
import Bio from "../../components/Home/Bio/Bio";
import ProfileTitle from "../../components/Home/ProfileTitle/ProfileTitle";
import "./Home.scss";
// import NoSnapContent from "../components/Home/NoSnapContent/NoSnapContent";

export default function Home() {
  const snappedContent = useRef<HTMLDivElement>(null);
  const isTouchScreen = useMemo(() => "ontouchstart" in window, []);

  useEffect(() => {
    const content = snappedContent.current;
    let isScrolling = false;

    if (content && !isTouchScreen) {
      content.addEventListener("wheel", (e: WheelEvent) => {
        if (!content.classList.contains("snap-mandatory")) {
          return;
        }
        e.preventDefault();

        if (isScrolling) return;

        isScrolling = true;
        setTimeout(() => {
          isScrolling = false;
        }, 600);

        let goingDown = e.deltaY > 0;
        if (goingDown) {
          content.scrollBy({ top: 1, behavior: "smooth" });
          return;
        }
        content.scrollBy({ top: -1, behavior: "smooth" });
      });
    }
  }, []);

  return (
    <section ref={snappedContent} className="h-screen w-full snap-y snap-mandatory overflow-x-hidden px-2">
      <ProfileTitle />
      <Bio />
    </section>
  );
}
