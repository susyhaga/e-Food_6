import styled from 'styled-components'

// Definindo o tipo das props para o List
type ListProps = {
  columns: number
  isRestaurant?: boolean // Adicione a prop isRestaurant aqui
}

// Adicionando o tipo para o Container
type ContainerProps = {
  background: 'rosa' | 'rosaclaro' | 'branca'
  isRestaurant?: boolean // Defina isRestaurant aqui
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
  margin: 0 auto;

  // Estilos específicos para a rota de restaurantes
  ${(props) =>
    props.isRestaurant &&
    `
    grid-template-columns: repeat(3, 1fr);
    max-width: 1024px;
  `}

  // Estilos específicos para a rota home
  ${(props) =>
    !props.isRestaurant &&
    `
    grid-template-columns: repeat(${props.columns}, 1fr);
    max-width: 1024px; // Largura máxima do container de cards

  `}
`
