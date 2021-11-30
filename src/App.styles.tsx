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
    color: #0047bb;
    font-size: 30px;
  }

  .score {
    color: #fa0606;
    z-index: 10px;
    font-size: 3rem;
    margin: 0;
  }

  h1 {
    font-family: "Acme", sans-serif;
    background-size: 100%;
    background-clip: text;
    font-weight: 500;
    filter: drop-shadow(3px 3px #0085a3);
    font-size: 80px;
    text-align: center;
    margin: 25px;
  }

  .start .next {
    cursor: pointer;
    background: linear-gradient();
  }
`;
