import github from "../../assets/images/github.png";
import linkedin from "../../assets/images/linkedin.png";

type SocialNavProps = {
  vertical?: true;
  align?: "self-start" | "self-center" | "self-end";
};

export default function SocialNav({ vertical, align = "self-center" }: SocialNavProps) {
  return (
    <nav className={`${vertical && "flex-col"} ${align} flex w-fit gap-6`}>
      <a href="https://www.linkedin.com/in/gabriele-ballicu/" target="_blank">
        <img src={linkedin} width={60} alt="linkedin" />
      </a>
      <a href="https://github.com/JJJJJJack/" target="_blank">
        <img src={github} width={50} alt="github" />
      </a>
    </nav>
  );
}
