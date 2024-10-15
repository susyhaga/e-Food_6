import { createGlobalStyle } from 'styled-components'

export const cores = {
  rosa: '#E66767',
  rosaclaro: '#FFEBD9',
  amarela: '#FFB930',
  branca: 'rgba(255, 255, 255, 1)'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.branca};
    overflow-x: hidden;
  }

  .container{
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    color: ${cores.branca}
  }
`
