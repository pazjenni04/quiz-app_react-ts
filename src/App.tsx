import React, { useState } from "react";
//components
import QuestionCard from "./components/QuestionCard";
import { fetchQuizQuestions } from "./API";

// types
import { QuestionState, Difficulty } from "./API";

// styles
import { GlobalStyle, Wrapper } from "./App.styles";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

function App() {
  const [loading, setLoading] = useState(false);
  //by doing this, we are telling TS that the questions will be an array of QuestionState[]
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameover, setGameOver] = useState(true);

  // will start quiz
  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  // will check answers
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameover) {
      //users answer from what pressed down on button
      const answer = e.currentTarget.value;

      //check answer against the correct value
      const correct = questions[number].correct_answer === answer;

      //add score if answer is correct
      if (correct) setScore((prev) => prev + 1);

      //save answer in the array for users answers
      const answerObject = {
        question: questions[number].question,
        answer: answer,
        correct: correct,
        correctAnswer: questions[number].correct_answer,
      };

      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    //move onto next question if not on last question
    const nextQuestion = number + 1;

    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  console.log(questions);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>Trivia Time!</h1>
        {/* display button if gameover or have reached the last of the questions */}
        {gameover || userAnswers.length === TOTAL_QUESTIONS ? (
          <button className="start" onClick={startQuiz}>
            {" "}
            Start{" "}
          </button>
        ) : null}

        {/* displays score if not gameover */}
        {!gameover ? <p className="score">Score: {score}</p> : null}
        {/* will display loading if loading */}
        {loading && <p>Loading questions....</p>}
        {/* if not loading and the game is not over then will display question cards */}
        {!loading && !gameover && (
          <QuestionCard
            questionNumber={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}
        {!gameover &&
        !loading &&
        userAnswers.length === number + 1 &&
        number !== TOTAL_QUESTIONS - 1 ? (
          <button className="next" onClick={nextQuestion}>
            Next
          </button>
        ) : null}
      </Wrapper>
    </>
  );
}

export default App;
