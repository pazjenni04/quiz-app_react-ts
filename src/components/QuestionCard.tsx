import React from "react";
// types
import { AnswerObject } from "../App";
// styling
import { Wrapper, ButtonWrapper } from "./QuestionCard.styles";

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
  <Wrapper>
    <p className="number">
      Question: {questionNumber} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }} />
    <div>
      {answers.map((answer) => (
        <ButtonWrapper
          key={answer}
          // checks to see if answer matches the correct answer but put a question mark before the . because if no data available, won't error out & make undefined
          correct={userAnswer?.correctAnswer === answer}
          userClicked={userAnswer?.answer === answer}
        >
          {/* double exclamation or double bang converts a truthy or falsy value to "true" or "false" */}
          {/* needed to add a boolean value to disabled so added "double bang" so can convert to true or false */}
          <button disabled={!!userAnswer} value={answer} onClick={callback}>
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </ButtonWrapper>
      ))}
    </div>
  </Wrapper>
);

export default QuestionCard;
