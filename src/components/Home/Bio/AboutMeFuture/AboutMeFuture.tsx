import { useContext, useEffect, useRef } from "react";
import GlassCard from "../../../Card/GlassCard";
import { ViewCtx } from "../../../../App";

export default function AboutMeFuture() {
  const aboutMeGameDev = useRef<HTMLDivElement>(null);
  const {
    currentSectionState: [_, setCurrentSection],
  } = useContext(ViewCtx);

  useEffect(() => {
    if (aboutMeGameDev.current) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setCurrentSection("Bio-Future");
          }
        });
      });

      observer.observe(aboutMeGameDev.current);

      return () => {
        if (aboutMeGameDev.current) {
          observer.unobserve(aboutMeGameDev.current);
        }
      };
    }
  }, []);

  return (
    <article ref={aboutMeGameDev} className="flex h-screen w-full snap-start flex-col items-center justify-center">
      <GlassCard entrance="animate-l">
        <p className="mb-2 text-center text-3xl text-yellow-400 md:text-4xl">
          I always thrive to learn much more stuff as I go on!✊
        </p>
        <p>
          Although some may think that all of this is too much to do/learn and one could lose focus, get confused or
          even not be able to specialize in anything in particular like this, I know how important it is to be able to
          slice and dice through new problems as they come up and how crucial it is to keep calm and adapt into
          different situations in order to pin point the best solution.
        </p>
        <p>
          In my learning journey, other than keeping my skills solid, I avoid to get comfy just solving only the average
          task and I dive into new problems as much as possible, thus achieving faster and more precise learning
          attitude along with a wider and deeper knowledge in the always revolving IT field.
        </p>
      </GlassCard>
    </article>
  );
}
