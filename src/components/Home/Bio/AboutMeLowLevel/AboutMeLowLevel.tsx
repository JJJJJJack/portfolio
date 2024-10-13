import { useContext, useEffect, useRef } from "react";
import { ViewCtx } from "../../../../App";
import { katakana } from "../../../../utils/characters";
import GlassCard from "../../../GlassCard/GlassCard";
import "./AboutMeLowLevel.scss";

export default function AboutMeLowLevel() {
  const aboutMeLowLevel = useRef<HTMLDivElement>(null);
  const textspans1 = useRef<HTMLSpanElement[]>([]);
  const textspans2 = useRef<HTMLSpanElement[]>([]);
  const textspans3 = useRef<HTMLSpanElement[]>([]);
  const { isTouchSceen } = useContext(ViewCtx);

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

            // const rollingChars = Math.random() > 0.5 ? katakana : "01";
            const rollingChars = katakana;
            // const charsInterval = Array(textspans.current.length);
            textspans1.current.forEach((span, i, arr) => {
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
                2000 + i * 50
              );
            });

            if (isTouchSceen) {
              return;
            }

            // multiple paragraphs are used to prevent the text from wrapping between characters and not at word endings
            textspans2.current.forEach((span, i, arr) => {
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
                5300 + i * 50
              );
            });
            textspans3.current.forEach((span, i, arr) => {
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
                8100 + i * 50
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
    <article
      ref={aboutMeLowLevel}
      className="resize-smooth flex h-screen w-full snap-start flex-col items-center justify-center"
    >
      <div className="flex h-[300px] flex-col items-start justify-start">
        <GlassCard entrance="animate-l">
          <span className="flex flex-wrap">
            <p className="matrix-shadow mb-2 w-full text-center text-3xl text-green-500 md:text-4xl">
              I'm a hardcore developer
            </p>
            <p>
              {(isTouchSceen
                ? `I like diving into new topic and discover every little niche. Now I'm dedicated to learn the in-depths of computer basis through C/C++ development and juicing out the source code from asm`
                : `I like diving into new topic and discover every little niche. Now I'm`
              )
                .split("")
                .map((p, i) => (
                  <span
                    className="matrix-shadow text-green-500"
                    ref={el => (textspans1.current[i] = el)}
                    key={"rollingChars1" + i}
                  >
                    {p}
                  </span>
                ))}
            </p>
            {isTouchSceen ? (
              ""
            ) : (
              <>
                <p>
                  {`dedicated to learn the in-depths of computer basis through`.split("").map((p, i) => (
                    <span
                      className="matrix-shadow text-green-500"
                      ref={el => (textspans2.current[i] = el)}
                      key={"rollingChars2" + i}
                    >
                      {p}
                    </span>
                  ))}
                </p>
                <p>
                  {`C/C++ development and juicing out the source code from asm`.split("").map((p, i) => (
                    <span
                      className="matrix-shadow text-green-500"
                      ref={el => (textspans3.current[i] = el)}
                      key={"rollingChars3" + i}
                    >
                      {p}
                    </span>
                  ))}
                </p>
              </>
            )}
          </span>
        </GlassCard>
      </div>
    </article>
  );
}
