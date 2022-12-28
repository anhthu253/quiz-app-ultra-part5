import Card from "../components/card/Card";
import "./Cards.css";
import ICard from "../components/card/ICard";
import {FC,useState} from "react"

type CardsProps = {
  cards:ICard[],
  toggleBookmark:(id?:string) => void
}
const Cards:FC<CardsProps>=({cards,toggleBookmark}) => {
  
  return (
    <div className="cards">
      {cards.map((card) => (
        <Card
          key={card.id}
          question={card.question}
          answer={card.answer}
          tags={card.tags}
          bookmarked={card.bookmarked}
          letClick={()=>{toggleBookmark(card.id)}}/>
      ))}
    </div>
  );
}

export default Cards;
