import { createGlobalStyle } from 'styled-components'



const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'omyu_pretty';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-01@1.0/omyu_pretty.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}



*{margin: 0; padding: 0; font-family: 'omyu_pretty';}
ul{list-style: none;}
a{text-decoration: none; color: #000;}
`














export default GlobalStyle