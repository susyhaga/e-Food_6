import { useLocation } from 'react-router-dom'
import Card from '../../models/CardModel'
import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'rosa' | 'rosaclaro' | 'branca'
  card: Card[]
  columns: number
  isRestaurant?: boolean
}

const ProductsList = ({
  title,
  background,
  card,
  columns,
  isRestaurant = false
}: Props) => {
  const location = useLocation() // hook para obter a localização

  const isCurrentRestaurant =
    isRestaurant || location.pathname === '/restaurant'

  const isHome = location.pathname === '/'

  return (
    <Container background={background} isRestaurant={isCurrentRestaurant}>
      <div className="container">
        <h2>{title}</h2>
        <List columns={columns} isRestaurant={isCurrentRestaurant}>
          {card.map((game) => (
            <Product
              key={game.id}
              classification={game.classification ?? []}
              description={game.description}
              infos={game.infos}
              image={game.image}
              title={game.title}
              isRestaurant={isCurrentRestaurant}
              isHome={isHome} // Passando a prop isHome
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductsList
