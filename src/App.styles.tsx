import styled, { createGlobalStyle } from "styled-components";
import BackgroundImage from "./images/trivia.jpg";

export const GlobalStyle = createGlobalStyle`
html {
  height: 100%;
}

body {
  background-image: url(${BackgroundImage});
  background-size: cover;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

* {
  box-sizing: border-box;
  font-family: 'Raleway', sans-serif;

}

`;

export const Wrapper = styled.div`
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;

  // styles the p tag in the wrapper
  > p {
    color: purple;
  }

  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    font-family: Fascinate Inline, Haettenschweiler, "Arial Narrow Bold",
      sans-serif;
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    background-size: 100%;
    background-clip: text;
    // --webkit-background-clip: text;
    // --webkit-text-fill-color: transparent;
    // --moz-background-clip: text;
    // --moz-text-fill-color: transparent;
    font-weight: 400;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }

  .start .next {
    cursor: pointer;
    background: linear-gradient();
  }
`;
