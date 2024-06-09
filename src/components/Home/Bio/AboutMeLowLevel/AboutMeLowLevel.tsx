import { useContext, useEffect, useRef } from "react";
import { ViewCtx } from "../../../../App";
import { katakana } from "../../../../utils/characters";
import GlassCard from "../../../Card/GlassCard";
import "./AboutMeLowLevel.scss";

export default function AboutMeLowLevel() {
  const aboutMeLowLevel = useRef<HTMLDivElement>(null);
  const textspans = useRef<HTMLSpanElement[]>([]);

  const {
    currentSectionState: [_, setCurrentSection],
  } = useContext(ViewCtx);

  useEffect(() => {
    if (aboutMeLowLevel.current) {
      const bgObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setCurrentSection("Bio-LowLevel");
          }
        });
        return () => {
          if (aboutMeLowLevel.current) {
            bgObserver.unobserve(aboutMeLowLevel.current);
          }
        };
      });

      bgObserver.observe(aboutMeLowLevel.current);

      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            observer.unobserve(aboutMeLowLevel.current);

            const rollingChars = Math.random() > 0.5 ? katakana : "01";

            // const charsInterval = Array(textspans.current.length);
            textspans.current.forEach((span, i, arr) => {
              if (arr[i].textContent === " " && arr[i + 1].textContent === " ") {
                for (let j = i; arr[j + 1].textContent === " "; j++) {
                  arr.splice(j, 1);
                }
                return; // trim whitespaces
              }
              const savedText = span.textContent === " " ? "\u00A0" : span.textContent;

              const binaryRoll = setInterval(
                () => {
                  span.textContent = rollingChars[Math.floor(Math.random() * rollingChars.length)];
                },
                Math.random() * 100 + 75
              );
              setTimeout(
                () => {
                  span.classList.remove("text-green-500", "matrix-shadow");
                  clearInterval(binaryRoll);
                  span.innerText = savedText;
                },
                2500 + Math.random() * i * 16
              );
            });
          }
        });
      });

      if (aboutMeLowLevel.current) {
        observer.observe(aboutMeLowLevel.current);
      }

      return () => {
        if (aboutMeLowLevel.current) {
          observer.unobserve(aboutMeLowLevel.current);
        }
      };
    }
  }, []);

  return (
    <article ref={aboutMeLowLevel} className="flex h-screen w-full snap-start flex-col items-center justify-center">
      <GlassCard entrance="animate-l">
        <span className="flex flex-wrap">
          <p className="matrix-shadow mb-2 w-full text-center text-3xl text-green-500 md:text-4xl">
            I'm a hardcore developer
          </p>
          {`I like diving into new topic and discover every little niche. Now I'm dedicated
        to learn the in-depths of computer basis through C/C++ development and Reverse Engineering binaries and dynamic
        libraries`
            .split("")
            .map((p, i) => (
              <span className="matrix-shadow text-green-500" ref={el => (textspans.current[i] = el)} key={i}>
                {p}
              </span>
            ))}
        </span>
      </GlassCard>
    </article>
  );
}
