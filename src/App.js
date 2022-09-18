import "./App.css";
import Card from "./components/card/Card";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <Card question="Question 1" answer="Answer 1" tag="Tag 1" />
        <Card question="Question 2" answer="Answer 2" tag="Tag 2" />
        <Card question="Question 3" answer="Answer 3" tag="Tag 3" />
      </main>
      <Navigation />
    </div>
  );
}

export default App;
