import { useState } from "react";
import CSA from "../QuizApi/CSA"
const Main=()=>{
const [currentQuestion, setCurrentQuestion] =useState(0);
  const [score, setScore] =useState(0);
  const [showScore, setShowScore] =useState(false);

  const handleClick = (correct) => {
    if (correct) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < CSA.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="app">
      {showScore ? (
        <section className="showScore-section">
          Your score is {score} out of {CSA.length}
        </section>
      ) : (
        <>
          <section className="question-section text-danger">
            <h1 className="text-danger">
              Question {currentQuestion + 1}/{CSA.length}
            </h1>
            <p>{CSA[currentQuestion].question}</p>
          </section>

          <section className="answer-section text-danger">
            {CSA[currentQuestion].optionA.map((item) => (
              <button className="btn btn-primary text-danger"onClick={() => handleClick(CSA.correct)}>
                {/* {item.optionA} */}
                {item.opt}
              </button>
            ))}
          </section>
        </>
      )}
    </div>
  );
}

export default Main;