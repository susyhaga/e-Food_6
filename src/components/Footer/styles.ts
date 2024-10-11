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
  width: 100%; // ocupa toda a largura
  height: auto;

  .container {
    width: 100%; // ocupa toda a largura
    max-width: none; // Remover qualquer largura máxima
    margin: 0 auto; // Isso pode não ser necessário se você quer que ocupe toda a largura
    padding: 0; // Remover padding para evitar espaço em branco
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  p {
    font-size: 10px;
    width: 100%; // Ajuste para 100% se necessário
    max-width: 480px; // pode manter um tamanho máximo, mas vai ocupar 100% da largura
    height: 24px;
    display: flex;
    text-align: center;
    color: ${cores.rosa};
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
