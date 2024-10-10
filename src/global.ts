import { createGlobalStyle } from 'styled-components';

export const cores = {
  rosa: '#E66767',
  rosaclaro: '#FFEBD9',
  amarela: '#FFB930',
  branca: 'rgba(255, 255, 255, 1)',
};

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.branca};
    padding-top: 20px;
    overflow-x: hidden;
    width: 100%;
    max-width: 1366px;
    margin: 0 auto;
  }


  .container {
    width: 100%;
    margin: 0 auto;
  }
`;
