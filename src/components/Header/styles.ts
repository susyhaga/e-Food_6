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
    justify-content: space-between;
    margin-left: 214px;
    gap: 300px;
    height: 100%;
    width: 100%;
  }

  h4 {
    margin-left: 171px;
  }
`

export const LinkCard = styled.a`
  width: 100%;
  white-space: nowrap;
`

export const RestImg = styled.div`
  width: 100%;
  height: 280px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
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
    position: relative;
    background-size: 100%;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    max-height: 280px;
    object-fit: cover;
    object-position: center;
    transform: translate(-50%, -50%);
    display: block;
  }

  .textsDiv {
    position: absolute;
    left: 30%;
    transform: translateX(-50%);
    z-index: 6;
    color: ${cores.branca};
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
  }

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
`
