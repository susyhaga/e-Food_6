import styled from 'styled-components'
import { cores } from '../../global'

// Definição do Card com o tipo isRestaurant
export const Card = styled.div<{ isRestaurant?: boolean }>`
  border: ${({ isRestaurant }) =>
    isRestaurant ? '8px solid ' + cores.rosa : '1px solid ' + cores.rosa};
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${({ isRestaurant }) =>
    isRestaurant ? cores.rosa : cores.branca};
  box-sizing: border-box;
  width: ${({ isRestaurant }) => (isRestaurant ? '320px' : '472px')};
  margin-right: ${({ isRestaurant }) => (isRestaurant ? '32px' : '80px')};
  margin-bottom: ${({ isRestaurant }) => (isRestaurant ? '32px' : '48px')};

  img {
    width: 100%;
    object-fit: cover;
    ${({ isRestaurant }) =>
      isRestaurant &&
      `
      height: 168px;
    `}
    ${({ isRestaurant }) =>
      !isRestaurant &&
      `
      height: 217px;
    `}
  }

  .container {
    gap: 32px;
    width: ${({ isRestaurant }) => (isRestaurant ? '320px' : '472px')};
    margin-right: ${({ isRestaurant }) => (isRestaurant ? '32px' : '80px')};
    margin-bottom: ${({ isRestaurant }) => (isRestaurant ? '32px' : '48px')};
  }
`

// Definição do TituloContainer com o tipo isRestaurant
export const TituloContainer = styled.div<{ isRestaurant?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 1px;
  margin-right: 8px;
  color: ${cores.branca};

  ${({ isRestaurant }) =>
    !isRestaurant &&
    `
    color: ${cores.rosa};
    margin-left: 8px;
  `}
`

export const Titulo = styled.h3<{ isRestaurant?: boolean }>`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-bottom: 16px;
  margin-top: 8px;
  color: ${cores.branca};

  ${({ isRestaurant }) =>
    !isRestaurant &&
    `
    color:  ${cores.rosa};
    margin-bottom: 16px;
  `}
`

export const ClassificationContainer = styled.div`
  display: flex;
  align-items: end;
  font-weight: bold;

  div {
    display: flex;
    align-items: center;
    gap: 4px;
  }
`

export const Descricao = styled.p<{ isRestaurant?: boolean }>`
  font-size: 14px;
  line-height: 22px;
  display: flex;
  width: 456px;
  height: 88px;
  margin-left: 1px;
  margin-right: 8px;
  text-align: start;

  ${({ isRestaurant }) =>
    isRestaurant &&
    `
    text-align: start;
    width: 304px;
    height: 88px;
    color: ${cores.branca};
  `}

  ${({ isRestaurant }) =>
    !isRestaurant &&
    `
    margin-left: 8px;
    width: 456px;
    height:auto;
    color: ${cores.rosa};
  `}
`

export const Infos = styled.div<{ isRestaurant?: boolean }>`
  position: absolute;
  top: 16px;
  right: 16px;

  ${({ isRestaurant }) =>
    isRestaurant &&
    `
    border-radius: 4px; /* Bordas arredondadas */
    padding: 8px; /* Padding */
  `}
`

export const Star = styled.div<{ isRestaurant?: boolean }>`
  display: flex;
  align-items: center;
  gap: 5px;

  ${({ isRestaurant }) =>
    isRestaurant &&
    `
    display: none; /* Esconde estrelas se for restaurante */
  `}

  img {
    width: 16px;
    height: 16px;

    ${({ isRestaurant }) =>
      isRestaurant &&
      `
      filter: brightness(0) invert(1); /* Inverter cores para melhor visibilidade */
    `}
  }
`
export const Button = styled.button<{ isRestaurant?: boolean }>`
  border: none;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  cursor: pointer;
  padding: 8px;
  margin-top: 16px;
  margin-bottom: 8px;
  margin-left: 8px;

  /* Cor e fundo padrão */
  color: ${({ isRestaurant }) => (isRestaurant ? cores.rosa : cores.branca)};
  background-color: ${({ isRestaurant }) =>
    isRestaurant ? cores.branca : cores.rosa};

  /* Estilo específico para o botão na rota restaurant */
  ${({ isRestaurant }) =>
    isRestaurant &&
    `
    color: ${cores.rosa}; /* Cor do texto para "Adicionar ao Carrinho" */
    background-color: ${cores.branca}; /* Fundo para "Adicionar ao Carrinho" */
    height: 24px; /* Ajuste a altura aqui */
    padding: 4px; /* Ajuste o padding se necessário */
    margin-bottom: 8px;
  `}

  width: ${({ isRestaurant }) => (isRestaurant ? '100%' : 'auto')};
  text-align: center;

  /* Estilos adicionais quando isRestaurant é verdadeiro */
  ${({ isRestaurant }) =>
    isRestaurant &&
    `
      margin-left: 1px;
      display: flex;
      align-items: center;
      justify-content: center;
  `}
`
