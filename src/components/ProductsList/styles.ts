import styled from 'styled-components'
import { breakpoints } from '../../global'

// Definindo o tipo das props para o List
type ListProps = {
  columns: number
  isRestaurant?: boolean
}

// Adicionando o tipo para o Container
type ContainerProps = {
  background: 'rosa' | 'rosaclaro' | 'branca'
  isRestaurant?: boolean
}

export const Container = styled.section<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 80px auto;
  max-width: 1024px;
`

export const List = styled.ul<ListProps>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  justify-items: center;
  align-items: center;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 0;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(1, 1fr);
  }
`
