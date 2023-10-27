import { useState } from "react";
import "./styles.css";

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false }
      ]
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false }
      ]
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false }
      ]
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true }
      ]
    }
  ];

  const handleAnswer = (isCorrect) => {
    const nextQuestion = currentQuestion + 1;
    if (isCorrect) {
      setScore(score + 1);
    }
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="app">
      {showScore ? (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="score-section">You scored {score} out of 4</div>
          <div>
            <button
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
              onClick={() => {
                setShowScore(false);
                setCurrentQuestion(0);
                setScore(0);
              }}
            >
              Reset
            </button>
          </div>
        </div>
      ) : (
        <>
          <div>
            <div className="question-section">
              <div className="question-count">
                <span>
                  Question {currentQuestion + 1}/{questions.length}
                </span>
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((el, idx) => (
                <button key={idx} onClick={() => handleAnswer(el.isCorrect)}>
                  {el.answerText}
                </button>
              ))}
              {currentQuestion >= 1 ? (
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "flex-end",
                    cursor: "pointer"
                  }}
                  onClick={() => setCurrentQuestion(currentQuestion - 1)}
                >
                  back
                </div>
              ) : null}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
