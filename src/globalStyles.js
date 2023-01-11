import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
:root {
    --extraSmall: 0.8rem;
    --small: 1rem;
    --smallMedium: 1.563rem;
    --medium: 1.953rem;
    --large: 3.815rem;
    --primaryColor: #e854e6;
    --secondaryColor: #1C1C1C;
    --primaryFontColor: white;
  }




  body {
    margin: 0;
    padding: 0;
    background: white;
    font-family: "Roboto", sans-serif;
  }
`;
 
export default GlobalStyle;
