import {
    createGlobalStyle,
    DefaultTheme,
    GlobalStyleComponent,
  } from "styled-components";
  
  const GlobalStyle: GlobalStyleComponent<{}, DefaultTheme> = createGlobalStyle`
    * {
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      font-family: 'Knewave', cursive;
      font-weight: 400;
      text-align: center;
      --main-black: #1c1a1a;
      --main-pink: #FF9FB2;
      --second-pink: #FF5C7C;
      --main-yellow: #FFF9EB;
      --main-blue: #1f3042;
      --second-blue: #61A0AF;
    }
    
    body {
      font-weight: bold;
      background: var(--main-yellow);
      width: 100vw;
      margin: 0;
      padding: 0;
      color: var(--main-blue);
  
      h1 {
        font-size: 3rem;
      }
  
      @media (max-width: 768px) {
        background-position: 12% 100%;
      }
  
      a:link, a:visited {
        text-decoration: none;
        color: var(--main-blue);
        width: 100%;
      }
    }
  
  
  `;
  
  export default GlobalStyle;
  