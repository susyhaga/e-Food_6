import styled from 'styled-components'

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
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 80px auto;
  margin-bottom: 56px;
`

export const List = styled.ul<ListProps>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  justify-content: center;
  align-items: center;
`
