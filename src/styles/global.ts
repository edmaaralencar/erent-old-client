import { createGlobalStyle, css } from 'styled-components'

type GlobalStyleProps = {
  removeBg?: boolean
}

const GlobalStyles = createGlobalStyle<GlobalStyleProps>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.font.family};
  }

  html {
    font-size: 62.5%;
  }

  button, a {
    cursor: pointer;
  }

  .Toastify__toast-body {
    font-size: 1.6rem;
  }

  ${({ theme, removeBg }) => css`
    body {
      overflow-x: hidden;
      color: ${theme.colors.black.main};

      background-color: ${removeBg
        ? theme.colors.white.main
        : theme.colors.gray.lighter};

      ::-webkit-scrollbar {
        width: 5px;
      }

      ::-webkit-scrollbar-track {
        background: #e2e2e2;
      }

      ::-webkit-scrollbar-thumb {
        background: #bfbfbf;
        border-radius: 1rem;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: #9e9e9e;
      }

      // -ms-overflow-style: none;
      // scrollbar-width: none;

      // &::-webkit-scrollbar {
      //   display: none;
      // }
    }
  `}
`

export default GlobalStyles
