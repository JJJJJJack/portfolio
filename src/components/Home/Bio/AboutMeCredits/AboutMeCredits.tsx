import { useContext, useEffect, useRef } from "react";
import GlassCard from "../../../Card/GlassCard";
import { ViewCtx } from "../../../../App";

export default function AboutMeCredits() {
  const aboutMeGameDev = useRef<HTMLDivElement>(null);
  const {
    currentSectionState: [_, setCurrentSection],
  } = useContext(ViewCtx);

  useEffect(() => {
    if (aboutMeGameDev.current) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setCurrentSection("Bio-Credits");
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
        <section className="text-red-200">
          <p className="mb-2 text-center text-3xl text-red-500 md:text-4xl">
            Thanks
            <p className="animate-heartbeat">❤️</p>
          </p>
          <p>
            I wanna spare a few words to express my gratitude for those that, in my journey, helped, helps and will keep
            on helping me grow.
          </p>
          <p>
            I thank my mentor, I thank my friends, I thank my coworkers and I thank every person who took part in any of
            my learning experience and spent any amount of time, no matter how little, to teach me something new and
            share his experience with me.
          </p>
          <p>
            I believe in the power of sharing knowledge and learning through each others experiences and helping each
            other above everything. <code className="text-red-400 underline">Together we can achieve anything.</code>
          </p>
        </section>
      </GlassCard>
    </article>
  );
}
