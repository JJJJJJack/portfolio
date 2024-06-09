import { useContext, useEffect, useRef } from "react";
import { ViewCtx } from "../../../../App";
import docker from "../../../../assets/svgs/docker.svg";
import golang from "../../../../assets/svgs/golang.svg";
import react from "../../../../assets/svgs/react.svg";
import typescript from "../../../../assets/svgs/typescript.svg";
import GlassCard from "../../../Card/GlassCard";
import "./AboutMeWeb.scss";

export default function AboutMeWeb() {
  const aboutMeWeb = useRef<HTMLDivElement>(null);
  const {
    currentSectionState: [_, setCurrentSection],
  } = useContext(ViewCtx);

  useEffect(() => {
    if (aboutMeWeb.current) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setCurrentSection("Bio-Web");
          }
        });
      });

      observer.observe(aboutMeWeb.current);

      return () => {
        if (aboutMeWeb.current) {
          observer.unobserve(aboutMeWeb.current);
        }
      };
    }
  }, []);

  return (
    <article ref={aboutMeWeb} className="flex h-screen w-full snap-start flex-col items-center justify-center md:p-0">
      <GlassCard entrance="animate-l">
        <p className="mb-2 w-full text-center text-3xl text-yellow-500 md:text-4xl">
          I'm experienced on Web Development
        </p>
        <p>
          React, Typescript, Javascript, Python, Golang. As a fullstack developer, I enjoy the freedom to apply all the
          programming paradigms as needed, in order to accomplish a more readable and pleasant codebase to work with,
          for everyone.
        </p>
        <p> My main job now:</p>
        <p className="job-icons-row my-2 flex flex-row flex-wrap justify-evenly gap-y-4">
          <img src={react} alt="React" />
          <img src={typescript} alt="Typescript" />
          <img src={golang} alt="Golang" />
          <img src={docker} alt="Docker" />
        </p>
        <p>
          Refactoring, optimizing and creation of web apps along with an NPM custom UI library made from scratch and
          maintaining clean and organized multiple git repositories through properly titled branches, pull requests and
          commits.
        </p>
      </GlassCard>
    </article>
  );
}
