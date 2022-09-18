import { nanoid } from "nanoid";
import "./App.css";
import Card from "./components/card/Card";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";

const cards = [
  {
    id: nanoid(),
    question: "Question 1",
    answer: "Answer 1",
    tags: ["Tag 1a", "Tag 1b", "Tag 1c"],
  },
  {
    id: nanoid(),
    question: "Question 2",
    answer: "Answer 2",
    tags: ["Tag 2a", "Tag 2b", "Tag 2c"],
  },
  {
    id: nanoid(),
    question: "Question 3",
    answer: "Answer 3",
    tags: ["Tag 3a", "Tag 3b", "Tag 3c"],
  },
];

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app__main">
        {cards.map((card) => (
          <Card
            key={card.id}
            question={card.question}
            answer={card.answer}
            tags={card.tags}
          />
        ))}
      </main>
      <Navigation />
    </div>
  );
}

export default App;
