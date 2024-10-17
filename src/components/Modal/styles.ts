import styled from 'styled-components'
import { cores } from '../../global'

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 6;
`

export const ModalContent = styled.div`
  left: 25%;
  background: ${cores.rosa};
  color: ${cores.branca};
  width: 100%;
  max-width: 1024px;
  height: 344px;
  position: relative;
  display: flex;
  flex-direction: row;
  transition: transform 0.3s ease;
`

export const ButtonClose = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  color: ${cores.branca};
  background: none;
  border: none;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`

export const Image = styled.img`
  width: 280px;
  height: 280px;
  margin: 32px;
  margin-right: 24px;
  object-fit: cover;
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 16px;
  width: 656px;
  height: 176px;
`
export const Title = styled.h2`
  font-size: 24px;
  margin: 16px;
  margin-left: 0;
`

export const Description = styled.p`
  font-size: 14px;
  text-align: start;
  margin-bottom: 24px;
  line-height: 22px;
`

export const Button = styled.button`
  background-color: ${cores.branca};
  color: ${cores.rosa};
  width: 204px;
  height: 16px;
  border: none;
  cursor: pointer;
  margin-top: 20px;
  font-weight: bold;
`
