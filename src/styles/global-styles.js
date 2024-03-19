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


div:where(.swal2-container){
  z-index: 9999!important;
}

.swal2-title{
  font-size:2.6rem!important;
  color: ${({ theme }) => theme.textColor1}!important;
}

div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm {
    background-color: #c30000!important;
    color:white!important;
    font-size: 1.6rem!important;
}

div:where(.swal2-container) div:where(.swal2-popup) {
    background: ${({ theme }) => theme.alertBg}!important;
}
`
