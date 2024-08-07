import { useEffect } from "react";
import "./CardGrid.css";
import brainfuck from "../../assets/images/brainfuck.jpg";
import binfo from "../../assets/images/binfo.jfif";
import portfolio from "../../assets/images/portfolio.jfif";
import botnewsansa from "../../assets/images/botnewsansa.jfif";
import Card from "./Card";

export default function CardGrid() {
  useEffect(() => {
    document.getElementById("cards").onmousemove = e => {
      for (const card of document.getElementsByClassName("card")) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

        (card as HTMLObjectElement).style.setProperty("--mouse-x", `${x}px`);
        (card as HTMLObjectElement).style.setProperty("--mouse-y", `${y}px`);
      }
    };
  }, []);
  return (
    <div id="cards">
      <Card
        src={brainfuck}
        href={"https://github.com/JJJJJJack/brainfuck-interpreter"}
        title={"Brainfuck Interpreter"}
        description={"Custom brainfuck interpreter implementation"}
      />
      <Card
        src={binfo}
        href={"https://github.com/JJJJJJack/binfo"}
        title={"binfo"}
        description={"Binary management library for Windows/Linux"}
      />
      <Card
        src={botnewsansa}
        href={"https://github.com/JJJJJJack/BotNewsAnsa"}
        title={"Ansa News Bot"}
        description={"A telegram bot that publish news from the ansa website RSS feeds"}
      />
      <Card
        src={portfolio}
        href={"https://github.com/JJJJJJack/portfolio"}
        title={"Portfolio website"}
        description={"This website whole project"}
      />
    </div>
  );
}
