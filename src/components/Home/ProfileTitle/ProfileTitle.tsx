import { useContext, useEffect, useRef } from "react";
import portrait from "../../../assets/images/reduce.jpg";
import SocialNav from "../../SocialNav/SocialNav";
import { ViewCtx } from "../../../App";
// import Button from "../../Button/Button";
// import { useNavigate } from "react-router-dom";

export default function ProfileTitle() {
  const profileTitle = useRef<HTMLDivElement>(null);
  //   const navigate = useNavigate();

  const {
    currentSectionState: [_, setCurrentSection],
  } = useContext(ViewCtx);

  useEffect(() => {
    if (profileTitle.current) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setCurrentSection("ProfileTitle");
          }
        });
      });

      observer.observe(profileTitle.current);

      return () => {
        if (profileTitle.current) {
          observer.unobserve(profileTitle.current);
        }
      };
    }
  }, []);

  //   const goToWebRoute = () => {
  //     navigate("/web");
  //   };

  return (
    <section className="flex h-screen snap-start flex-col justify-center">
      <div
        ref={profileTitle}
        className="flex w-full flex-col-reverse items-center justify-center gap-y-10 p-4 md:flex-row md:justify-around"
      >
        <header>
          <h1 className="text-blue-200 mix-blend-color-dodge">
            Hi, I'm <br />
            Gabriele Ballicu
          </h1>
          <p className="select-none text-center text-lg text-blue-800 md:text-end md:text-blue-300 md:mix-blend-overlay">
            (my friends call me Jack tho)
          </p>
        </header>
        <aside className="flex h-min w-full flex-col gap-y-4 md:w-fit">
          <img
            className="overflow-hidden rounded-full border-[2px] border-dashed border-white hover:cursor-pointer md:max-w-2xl"
            src={portrait}
            alt="My beautiful portrait, I made it my self!"
          />
          <SocialNav />
        </aside>
      </div>
      {/* <footer className="w-full">
        <Button>
          <a onClick={goToWebRoute}>Web</a>
        </Button>
      </footer> */}
    </section>
  );
}
