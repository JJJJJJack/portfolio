import { useEffect, useRef } from "react";
import "./GlassCard.scss";

type GlassCardProps = {
  textAlign?: "text-center" | "text-left" | "text-right";
  /** animate-r is causing lag, replaced with animate-l */
  entrance?: `animate-${"l" | "r" | "t" | "b"}`;
  /** can't click hrefs due to :before,:after covering the content */
  tmpDisableGlassGlow?: true;
  children: React.ReactNode;
};

export default function GlassCard({
  textAlign = "text-left",
  entrance,
  tmpDisableGlassGlow,
  children,
}: GlassCardProps) {
  const description = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // check if the element is in the viewport
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entrance) {
            entry.target.classList.add(entrance);
            entry.target.classList.remove("opacity-0");
          }
        }
      });
    });

    if (description.current) {
      observer.observe(description.current);
    }

    return () => {
      if (description.current) {
        observer.unobserve(description.current);
      }
    };
  }, []);

  return (
    <span
      ref={description}
      className={`${
        tmpDisableGlassGlow ? "" : "glass-glow"
      } ${textAlign} card-glass p-8 text-gray-300 opacity-0 md:max-w-[75%]`}
      onMouseMove={e => {
        const card = e.target as HTMLElement;
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }}
    >
      {children}
    </span>
  );
}
