import { useContext, useEffect, useRef } from "react";
import { ViewCtx } from "../../../../App";
import GlassCard from "../../../GlassCard/GlassCard";

export default function AboutMeGameDev() {
  const aboutMeGameDev = useRef<HTMLDivElement>(null);
  const {
    currentSectionState: [_, setCurrentSection],
  } = useContext(ViewCtx);

  useEffect(() => {
    if (aboutMeGameDev.current) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setCurrentSection("Bio-GameDev");
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
      <GlassCard entrance="animate-l" tmpDisableGlassGlow>
        <p className="mb-2 w-full text-center text-3xl text-yellow-500 md:text-4xl">
          I recently got into game dev too!
        </p>
        <p>Along with my team, we crash into game jams or fiddle with personal projects...</p>
        <p>
          <a
            className="text-blue-600 underline"
            href="https://www.lazioinnova.it/news/premiati-i-vincitori-di-hack-the-roll/"
            target="_blank"
          >
            We even won a game jam!🎉
          </a>
        </p>
        <p>
          <a
            className="bg-transparent text-blue-600 underline"
            href="https://globalgamejam.org/users/jjjack"
            target="_blank"
          >
            We are eager participants of the Global Game Jam 🎮
          </a>
        </p>
        <p>
          While I love to code, I get tons of fun working with the sound system in videogames, from dubbing, making
          tracks and SFX to programming the audio manager, mainly in Unity
        </p>
      </GlassCard>
    </article>
  );
}
