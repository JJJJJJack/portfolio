import { useEffect, useRef } from "react";
import "./GlassCard.scss";

type GlassCardProps = {
  textAlign?: "text-center" | "text-left" | "text-right";
  /** animate-r is causing lag, replaced with animate-l */
  entrance?: `animate-${"l" | "r" | "t" | "b"}`;
  /** can't click hrefs due to :before,:after covering the content */
  tmpDisableGlassGlow?: true;
  className?: string;
  children: React.ReactNode;
};

export default function GlassCard({
  textAlign = "text-left",
  entrance,
  tmpDisableGlassGlow,
  className,
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

    // Cleanup function to remove the event listeners
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
      } ${textAlign} ${className} card-glass p-4 text-gray-300 opacity-0 md:max-w-[800px] md:p-8`}
      onMouseMove={e => {
        const card = e.target as HTMLElement;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }}
    >
      {children}
    </span>
  );
}
