import React from 'react'
import { useLocation } from 'react-router-dom'
import Product from '../Product'
import { Container, List } from './styles'

export interface ProductCard {
  id: number
  title: string
  classification?: string[]
  description: string
  image: string
  porcao?: string
  infos: string[]
  preco?: number
}

export type Props = {
  title: string
  background: 'rosa' | 'rosaclaro' | 'branca'
  card?: ProductCard[]
  columns: number
  isRestaurant?: boolean
  onProductClick?: (product: ProductCard) => void
}

const ProductsList = ({
  title,
  background,
  card = [],
  columns,
  isRestaurant = false,
  onProductClick
}: Props) => {
  const location = useLocation()
  const isCurrentRestaurant = isRestaurant || location.pathname === '/menu'
  const isHome = location.pathname === '/'

  return (
    <Container background={background} isRestaurant={isCurrentRestaurant}>
      <div className="container">
        <h2>{title}</h2> {/* Título sendo exibido */}
        <List columns={columns} isRestaurant={isCurrentRestaurant}>
          {card.map((product, index) => (
            <Product
              key={product.id}
              classification={product.classification ?? []}
              description={product.description}
              infos={product.infos}
              image={product.image}
              title={product.title} // Passando o título corretamente
              preco={product.preco}
              porcao={product.porcao}
              isRestaurant={isCurrentRestaurant}
              isHome={isHome}
              onClick={() => onProductClick?.(product)}
              id={product.id}
              isFeatured={isHome && index === 0}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductsList
