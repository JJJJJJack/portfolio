import { useContext, useEffect } from "react";
import ProjectsGrid from "../../components/Projects/ProjectsGrid";
import chevronleft from "../../assets/images/chevronleft.png";
import { useNavigate } from "react-router-dom";
import { ViewCtx } from "../../App";

export default function Projects() {
  const navigate = useNavigate();
  const {
    currentSectionState: [_, setCurrentSection],
  } = useContext(ViewCtx);

  useEffect(() => {
    setCurrentSection("Projects");
  }, []);

  const goToHome = () => {
    navigate("/");
  };

  return (
    <section className="h-screen w-full px-2">
      <img
        src={chevronleft}
        className="clickable fixed m-10 h-10 animate-r cursor-pointer md:h-20"
        color="white"
        onClick={goToHome}
      />
      <article className="flex h-screen flex-col justify-evenly p-6 pt-10 md:p-8">
        <header className="flex w-full flex-col gap-4 text-center">
          <h1 className="animate-l text-center">Projects</h1>
          <p className="animate-r">
            Here is a list of personal projects I'm having fun working on recently, source code on my&nbsp;
            <a className="clickable text-amber-600 underline" href="https://github.com/JJJJJJack" target="_blank">
              GitHub
            </a>
          </p>
        </header>
        <ProjectsGrid />
      </article>
    </section>
  );
}
