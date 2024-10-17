// styles.ts
import styled from 'styled-components'
import { cores } from '../../global'

// Definição do Card com o tipo isRestaurant
export const Card = styled.div<{ isRestaurant?: boolean }>`
  width: ${({ isRestaurant }) => (isRestaurant ? '320px' : '472px')};
  border: ${({ isRestaurant }) =>
    isRestaurant ? '8px solid ' + cores.rosa : '1px solid ' + cores.rosa};
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${({ isRestaurant }) =>
    isRestaurant ? cores.rosa : cores.branca};
  box-sizing: border-box;
  margin-right: ${({ isRestaurant }) => (isRestaurant ? '32px' : '80px')};
  margin-bottom: ${({ isRestaurant }) => (isRestaurant ? '32px' : '48px')};

  img {
    width: 100%;
    object-fit: cover;
    height: ${({ isRestaurant }) => (isRestaurant ? '168px' : '217px')};
  }
`

export const TituloContainer = styled.div<{ isRestaurant?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 8px;
  margin-right: 8px;
  color: ${({ isRestaurant }) => (isRestaurant ? cores.branca : cores.rosa)};
`

export const Titulo = styled.h3<{ isRestaurant?: boolean }>`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 16px;
  margin-top: 8px;
  color: ${({ isRestaurant }) => (isRestaurant ? cores.branca : cores.rosa)};
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
  margin-left: 8px;
  margin-right: 8px;
  text-align: ${({ isRestaurant }) => (isRestaurant ? 'start' : 'start')};
  width: ${({ isRestaurant }) => (isRestaurant ? '304px' : '456px')};
  height: ${({ isRestaurant }) => (isRestaurant ? '88px' : 'auto')};
  color: ${({ isRestaurant }) => (isRestaurant ? cores.branca : cores.rosa)};
`

export const Infos = styled.div<{ isRestaurant?: boolean }>`
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 8px;

  ${({ isRestaurant }) =>
    isRestaurant &&
    `
      border-radius: 4px;
      padding: 8px;
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
        filter: brightness(0) invert(1);
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

  color: ${({ isRestaurant }) => (isRestaurant ? cores.rosa : cores.branca)};
  background-color: ${({ isRestaurant }) =>
    isRestaurant ? cores.branca : cores.rosa};

  height: ${({ isRestaurant }) => (isRestaurant ? '24px' : 'auto')};
  width: ${({ isRestaurant }) => (isRestaurant ? '100%' : 'auto')};
  text-align: center;

  ${({ isRestaurant }) =>
    isRestaurant &&
    `
      margin-left: 1px;
      display: flex;
      align-items: center;
      justify-content: center;
  `}
`
