//logic that will reandomize the questions from the API fetch

//shuffles the array
export const shuffleArray = (array: any[]) =>
  [...array].sort(() => Math.random() - 0.5);
