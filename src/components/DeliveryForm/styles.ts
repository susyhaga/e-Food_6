import styled from 'styled-components'
import { cores } from '../../global'
import { ButtonContainer } from '../../components/Button/styles'

type InputGroupProps = {
  maxWidth?: string
  marginTop?: string
}

export const OverLay = styled.div`
  position: fixed; // Alterado para fixed
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  z-index: 2;
`

export const CardContainer = styled.aside`
  max-width: 360px;
  height: 100%; /* Mantém a altura 100% */
  width: 100%;
  padding: 16px;
  background-color: ${cores.rosa};
  color: ${cores.rosaclaro};
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 6;

  &.is-open {
    display: flex;
  }

  .totalvalue {
    display: flex;
    align-items: start;
    font-weight: bold;
    margin-top: 32px;

    margin-bottom: 16px;
    h2 {
      font-size: 16px;
      margin-right: 8px;
    }
    span {
      margin-left: 6px;
    }
  }
`
export const StyledParagraph = styled.p`
  font-size: 14px;
  line-height: 22px;
`
export const Row = styled.div`
  display: block;
  flex-wrap: wrap;
  gap: 16px;
`

export const InputGroup = styled.div<InputGroupProps>`
  flex: 1;
  max-width: ${({ maxWidth }) => maxWidth || '100%'};

  label {
    font-size: 14px;
    font-weight: bold;
    color: ${cores.rosaclaro};
    margin-bottom: 8px;
    margin-top: 8px;
    display: block;
  }

  input {
    width: 100%;
    padding: 8px;
    height: 32px;
    border: 1px solid ${cores.rosaclaro};
    background-color: ${cores.rosaclaro};
  }
`
export const InputGroupRow = styled.div`
  display: flex;
  gap: 34px;
  width: 100%;
  margin-bottom: 50px;
  margin-top: 8px;

  ${InputGroup} {
    width: 155px;
    height: 32px;
    label {
      font-size: 14px;
      font-weight: bold;
      color: ${cores.rosaclaro};
      margin-bottom: 8px;
      margin-top: 8px;
      display: block;
    }
  }
`
export const ContainerButtons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`
// Botão para continuar com a compra
export const ContinueButton = styled(ButtonContainer)`
  background-color: ${cores.rosaclaro};
  color: ${cores.rosa};
  margin-top: 24px;
`

// Botão para voltar ao carrinho
export const BackButton = styled(ButtonContainer)`
  color: ${cores.rosa};
`

export const ErrorMessage = styled.div`
  color: ${cores.amarela};
  font-size: 12px;
  margin-top: 4px;
  margin-bottom: 24px;
  font-weight: bold;
`
