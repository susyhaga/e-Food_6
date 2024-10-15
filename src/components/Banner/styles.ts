import { styled } from 'styled-components'
import { cores } from '../../global'

// Banner
export const Img = styled.div`
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center; /* Centraliza a imagem no background */
  font-weight: bold;
  min-width: 100vw;
  width: 100%; /* Garante que ocupe toda a largura da tela */
  min-height: 384px;
  padding: 0;
  position: relative;

  .container {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); /* Ajuste para alinhar ao centro exato */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${cores.rosa};

    img {
      width: 125px;
      height: 57.5px;
      margin-top: 64px;
    }
  }
`

export const Titulo = styled.h2`
  width: 580px;
  padding-top: 138px;
  padding-bottom: 40px;
  margin: 0; /* Remove margin para evitar desalinhamento */
  font-size: 36px;
  font-weight: 900;
  line-height: 42.19px;
  text-align: center;
`
