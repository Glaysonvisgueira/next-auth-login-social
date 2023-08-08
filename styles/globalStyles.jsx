import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle` 
  
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing:border-box;
}

html, body, :root {
    font-family: 'Lato', sans-serif;
    min-height: 100%;    
    scroll-behavior: smooth;
    overflow-x: hidden;

    background: #2980b9;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #2c3e50, #2980b9);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #2c3e50, #2980b9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  }  

  ::selection {
    background: #000;
    color: #fff;
  }
       
  ::-webkit-scrollbar {
    width: 4px;
  }
  
  ::-webkit-scrollbar-track {
    background: #a8a8a8;
  }
  
  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: #ccc; 
    
  }

  ::-webkit-scrollbar-thumb:hover {
    opacity: 0.8;
    cursor: pointer;
  }  
`;
export default GlobalStyle;
