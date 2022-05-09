import {
    createGlobalStyle,
    DefaultTheme,
    GlobalStyleComponent,
  } from "styled-components";
  
  const GlobalStyle: GlobalStyleComponent<{}, DefaultTheme> = createGlobalStyle`
    * {
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      font-family: 'Roboto', sans-serif;
      font-weight: 800;
      text-align: center;
      --main-black: #06070E;
      --main-pink: #FF9FB2;
      --main-yellow: #FFF9EB;
      --main-blue: #247BA0;
    }
    
    body {
      font-weight: bold;
      background: var(--main-yellow);
      /* background: linear-gradient(to bottom, var(--main-yellow) 0%,var(--main-pink) 100%); */
      width: 100vw;
      /* min-height: 100vh; */
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
  