import { useEffect, useRef } from "react";
import AboutMeCredits from "./AboutMeCredits/AboutMeCredits";
import AboutMeFuture from "./AboutMeFuture/AboutMeFuture";
import AboutMeGameDev from "./AboutMeGameDev/AboutMeGameDev";
import AboutMeLowLevel from "./AboutMeLowLevel/AboutMeLowLevel";
import AboutMeWeb from "./AboutMeWeb/AboutMeWeb";

export default function Bio() {
  const bioTitle = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (bioTitle.current) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-t");
              entry.target.classList.remove("opacity-0");
            }, 300);
          }
        });
      });

      observer.observe(bioTitle.current);

      return () => {
        if (bioTitle.current) {
          observer.unobserve(bioTitle.current);
        }
      };
    }
  }, []);

  return (
    <section>
      <h1 ref={bioTitle} className="sticky top-0 text-blue-800 opacity-0 md:mt-2 md:p-10">
        About me
      </h1>
      <AboutMeWeb />
      <div className="m-1" /> {/* To not let 2 sections intersect in the same time */}
      <AboutMeLowLevel />
      <div className="m-1" />
      <AboutMeGameDev />
      <div className="m-1" />
      <AboutMeFuture />
      <div className="m-1" />
      <AboutMeCredits />
      <div className="m-1" />
    </section>
  );
}
