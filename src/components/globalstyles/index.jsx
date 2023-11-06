import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        scroll-behavior: smooth;
    }
    ::-webkit-scrollbar {
        background-color: #00204B;
        width: 10px;
    }
    ::-webkit-scrollbar-thumb{
        background: #f1f1f1;
    }
`
export default GlobalStyles