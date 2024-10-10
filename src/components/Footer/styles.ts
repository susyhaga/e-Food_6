import styled from 'styled-components'
import { cores } from '../../global'

export const Container = styled.footer`
  display: block;
  background-color: ${cores.rosaclaro};
  text-decoration: none;
  color: ${cores.rosa};
  margin-top: 120px;
  padding: 36px 0;
  font-size: 14px;
  width: 100%;
  height: auto;

  .container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; //para o botao ir para a esquerda
    color: ${cores.rosa};
  }

  p {
    font-size: 10px;
    width: 480px;
    height: 24px;
    display: flex;
    text-align: center;
  }
`

export const FooterSection = styled.div`
  text-align: center;
`

export const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 33px;
  margin-bottom: 40px;
`

export const SocialMediaIcon = styled.div`
  img {
    width: 24px;
    height: 24px;
  }
`
