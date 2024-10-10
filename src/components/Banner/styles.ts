import { styled } from 'styled-components'
import { cores } from '../../global'

//div principal
export const Img = styled.div`
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
  height: 384px;
  top: -24px;
  gap: 0px;
  opacity: 0px;

  .container {
    position: relative;
    top: 64px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; //para o botao ir para a esquerda
    color: ${cores.rosa};

    img {
      width: 125px;
      height: 57.5px;
    }
  }
`
export const Titulo = styled.h2`
  width: 580px;
  padding-bottom: 40px;
  margin-top: 139px;
  font-size: 36px;
  font-weight: 900;
  line-height: 42.19px;
  text-align: center;
`
