//fetches the API for the questions for the quiz
import { shuffleArray } from "./utils";

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

//uses the type for the questions but adds this property to it and creates a new state type
export type QuestionState = Question & { answers: string[] };

//create an enum to set difficulty level so that can attach it to the parameter below
export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

//created the enum, so will attach to "difficulty" parameter below
export const fetchQuizQuestions = async (
  amount: number,
  difficulty: Difficulty
) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;

  //this will await the fetch itself, then will await to convert to json
  const data = await (await fetch(endpoint)).json();

  return data.results.map((question: Question) => ({
    ...question,
    //so importing the shuffle function created in utils and shuffling the question array by using a spread operator to copy
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};
