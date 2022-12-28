import {FC, useState} from "react";
import "./Card.css";
import ICard from "./ICard"

interface CardProps extends ICard{
  letClick:()=>void
}
const Card:FC<CardProps>=({ question, answer, tags, bookmarked, letClick }) =>{
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <section className="card">
      <h2>{question}</h2>
      <button
        onClick={() =>
          setShowAnswer((previousShowAnswer) => !previousShowAnswer)
        }
        className="card__button-answer"
        type="button"
      >
        {showAnswer ? "Hide answer" : "Show answer"}
      </button>
      {showAnswer && (
        <p className="card__answer card__answer--active">{answer}</p>
      )}
      <ul className="card__tag-list">
        {tags.map((tag, index) => (
          <li key={index} className="card__tag-list-item">
            #{tag}
          </li>
        ))}
      </ul>
      <div className="card__button-bookmark">
        <button
        onClick={letClick}
          className={`card__bookmark${
            bookmarked ? " card__bookmark--active" : ""
          }`}
          aria-label="bookmark"
          type="button"
        >
          <svg className="card__bookmark-icon" viewBox="0 0 24 24">
            <path d="M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z" />
          </svg>
        </button>
      </div>
    </section>
  );
}

export default Card;
