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
  font-size: 30px;
  color: #000000;

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
    font-size: 1.7rem;
    margin: 5px;
  }

  h1 {
    font-family: "Acme", sans-serif;
    background-size: 100%;
    background-clip: text;
    font-weight: 500;
    color: #000ad4;
    filter: drop-shadow(3px 3px #0085a3);
    font-size: 90px;
    text-align: center;
    margin: 25px;
  }

  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 50px;
    margin: 20px 0;
    padding: 0 40px;
  }

  .start {
    max-width: 200px;
  }
`;
