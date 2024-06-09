import { useContext, useEffect, useRef } from "react";
import { ViewCtx } from "../../../App";

export default function NoSnapContent() {
  const noSnapContent = useRef<HTMLDivElement>(null);
  const {
    currentSectionState: [_, setCurrentSection],
  } = useContext(ViewCtx);

  useEffect(() => {
    if (noSnapContent.current) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setCurrentSection("NoSnapContent");
          }
        });
      });

      observer.observe(noSnapContent.current);
      return () => observer.unobserve(noSnapContent.current);
    }
  }, []);

  return (
    <section ref={noSnapContent} className="snap-start">
      <div className="flex h-[500vh] flex-col items-center justify-evenly text-3xl text-white">
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
      </div>
    </section>
  );
}
