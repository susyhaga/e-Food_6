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
  width: 100%;
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
    max-width: 1024px;
    width: 100%;
    padding: 0 20px;
    white-space: nowrap;
    gap: 268px;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 1rem;
    }
  }
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
  margin: 0 auto;
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
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    object-fit: cover;
  }

  .textsDiv {
    max-width: 1024px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    position: absolute;
    z-index: 6;
    color: ${cores.branca};
    gap: 156.5px;
    font-size: 32px;

    @media (max-width: 768px) {
      font-size: 24px;
      gap: 1rem;
    }
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
