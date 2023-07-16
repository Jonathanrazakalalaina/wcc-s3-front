import { createGlobalStyle } from 'styled-components'

const StyledGlobalStyled = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        scroll-behavior: smooth;
    }
    body {
        font-family: "Inter", 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
    li {
        list-style-type: none;
    }
    a, a:visited {
        text-decoration: none;
    }

    @keyframes scaleIn {
        0% {
            transform: scale(0.5);
            opacity: 0;
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
    }
    @keyframes clignote {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
`

const GlobalStyles = () => {
  return (
    <StyledGlobalStyled />
  )
}

export default GlobalStyles
