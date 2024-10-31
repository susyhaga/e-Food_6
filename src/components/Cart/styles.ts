import styled from 'styled-components'
import { cores } from '../../global'
import trash from '../../assets/images/trash.png'
import { ButtonContainer, ButtonLink } from '../Button/styles'

export const OverLay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${cores.overlay};
  cursor: pointer;
`

export const CartContainer = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${cores.rosa};
  z-index: 2;
  padding: 32px 8px 16px 8px;
  max-width: 360px;
  width: 100%;

  ${ButtonContainer} {
    max-width: 100%;
    width: 327px;
    margin-right: 8px;
    margin-top: 16px;
    background-color: ${cores.rosaclaro};
    color: ${cores.rosa};
    border: none;
  }
`
export const ProductInfos = styled.div`
  display: flex;
  background-color: ${cores.rosaclaro};
  color: ${cores.rosa};
  align-items: flex-start;
  padding: 8px 8px 12px 8px;
  margin-bottom: 16px;
  position: relative;

  img {
    padding-right: 8px;
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    h3 {
      padding-bottom: 16px;
    }
    span {
      margin-bottom: 8px;
    }
  }

  .trash-button {
    background-image: url(${trash});
    background-color: transparent;
    background-size: contain;
    background-repeat: no-repeat;
    border: none;
    width: 16px;
    height: 16px;
    cursor: pointer;
    position: absolute;
    right: 8px;
    bottom: 8px;
  }
`

export const Prices = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 16px;
  color: ${cores.rosaclaro};
  margin-bottom: 24px;
`

export const Button = styled(ButtonLink)`
  color: ${cores.rosa};
  background-color: ${cores.rosaclaro};
`
