import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`    
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

::-webkit-scrollbar-thumb {
  background: red; 
  border-radius: 10px;
}

html{
  font-size: 62.5%;
  height: 100%;

}

body{
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  background-color:  ${({ theme }) => theme.body};
 

  line-height: 1.5;
}




`
