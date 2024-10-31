import { createGlobalStyle } from 'styled-components'

//breakpoints responsividade
export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const cores = {
  rosa: '#E66767',
  rosaclaro: '#FFEBD9',
  amarela: '#fbc531',
  overlay: 'rgba(0, 0, 0, 0.8)',
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
    color: ${cores.branca};


  }
`
