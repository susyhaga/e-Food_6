import styled from 'styled-components'
import { cores } from '../../global'

export const HeaderBar = styled.header`
  width: 100%;
  color: ${cores.branca};

  a {
    color: ${cores.rosa};
    text-decoration: none;
    font-weight: bold;
  }
`
export const ImgHeader = styled.div`
  height: 186px;
  width: 100vw;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    display: flex;
    align-items: center;
    margin: 0 auto;
    width: calc(100% - 40px);
    gap: 290px;
  }
`

export const LinkCard = styled.a`
  width: 100%;
  white-space: nowrap;
`

export const RestImg = styled.div`
  width: 100vw;
  height: 280px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto; /* Centralizar horizontalmente */
  padding: 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  img {
    width: 100%; /* Ajuste para garantir que a imagem ocupe toda a largura */
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    object-fit: cover;
  }

  .textsDiv {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
    justify-content: start;
    margin-left: 800px;
    position: absolute;
    z-index: 6;
    color: ${cores.branca};
    gap: 156.5px; /* Espaçamento entre os elementos */
    font-size: 32px;
  }

  p {
    font-weight: 100;
    margin-top: 25px;
  }

  h4 {
    font-size: 32px;
    padding-bottom: 32px;
  }
`
