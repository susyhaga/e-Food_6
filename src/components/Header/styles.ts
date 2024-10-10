import styled from 'styled-components'
import { cores } from '../../global'

export const HeaderBar = styled.header`
  width: 100%; // Garantir que o RestImg ocupe a largura total

  color: ${cores.branca};

  a {
    color: ${cores.rosa};
    text-decoration: none;
    font-weight: bold;
  }
`

export const ImgHeader = styled.div`
  height: 186px;
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
    justify-content: space-between;
    margin: 0 auto;
    height: 100%;
  }

  h4 {
    margin-left: 171px;
  }
`

export const LinkCard = styled.a`
  display: flex;
  align-items: center;
  margin-right: 171px;
`

export const RestImg = styled.div`
  width: 1366px;
  height: 280px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;

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
    margin-bottom: 80px;
    object-fit: cover;
    position: relative;
    z-index: 0;
  }

  .textsDiv {
    position: absolute;
    left: 0;
    z-index: 6;
    color: ${cores.branca};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 171px;

    p {
      font-size: 32px;
      font-weight: 100;
      line-height: 37.5px;
      margin-bottom: 157px;
    }

    h4 {
      font-size: 32px;
      margin: 0;
    }
  }
`
