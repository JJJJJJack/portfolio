import github from "../../assets/images/github.png";
import email from "../../assets/images/email.png";
import linkedin from "../../assets/images/linkedin.png";

type SocialNavProps = {
  vertical?: true;
  align?: "self-start" | "self-center" | "self-end";
};

export default function SocialNav({ vertical, align = "self-center" }: SocialNavProps) {
  return (
    <nav className={`${vertical && "flex-col"} ${align} flex w-fit items-center gap-6`}>
      <a href="https://www.linkedin.com/in/gabriele-ballicu/" target="_blank">
        <img src={linkedin} width={60} alt="linkedin" />
      </a>
      <a href="https://github.com/JJJJJJack/" target="_blank">
        <img src={github} width={50} alt="github" />
      </a>
      <a href="mailto: gabrieleballicu@protonmail.com" target="_blank">
        <img src={email} width={60} alt="email" />
      </a>
    </nav>
  );
}
