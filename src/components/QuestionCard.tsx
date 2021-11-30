import React from "react";
// types
import { AnswerObject } from "../App";

type Props = {
  question: string;
  answers: string[];
  // not returning anything so return void
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNumber: number;
  totalQuestions: number;
};

//react.fc tells typescript that its a functional component
//to specify props, have to do them inside the angle brackets and then destructure props inside parentheses using curly braces
const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNumber,
  totalQuestions,
}) => (
  <div>
    <p className="number">
      Question: {questionNumber} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }} />
    <div>
      {answers.map((answer) => (
        <div key={answer}>
          {/* double exclamation or double bang converts a truthy or falsy value to "true" or "false" */}
          {/* needed to add a boolean value to disabled so added "double bang" so can convert to true or false */}
          <button disabled={!!userAnswer} value={answer} onClick={callback}>
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default QuestionCard;
