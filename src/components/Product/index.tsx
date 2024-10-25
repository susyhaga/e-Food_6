import React from 'react'
import {
  Card,
  TituloContainer,
  Titulo,
  Descricao,
  Infos,
  ClassificationContainer,
  Star,
  Button
} from './styles'
import Tag from '../Tag'
import star from '../../assets/images/star.png'
import { useNavigate, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux' // Importa useDispatch
import { addItem, open } from '../../store/reducers/cart' // Importa a ação addItem

// Props do componente Product
type Props = {
  id: number
  title: string
  classification?: string[]
  description: string
  infos: string[]
  image: string
  porcao?: string
  preco?: number // A propriedade preco é opcional
  isRestaurant?: boolean
  isHome?: boolean
  isFeatured?: boolean
  onClick?: () => void
}

const Product = ({
  id,
  title,
  classification = [],
  description,
  infos,
  image,
  preco, // Adiciona preco aqui
  isRestaurant,
  isHome,
  isFeatured,
  onClick
}: Props) => {
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()

  const handleStyledLinkClick = () => {
    navigate(isRestaurant ? '/' : `/menu/${id}`)
  }

  const handleImageClick = () => {
    if (isHome) {
      navigate(`/menu/${id}`)
    } else {
      onClick?.()
    }
  }

  // Função para adicionar ao carrinho
  const handleAddToCart = () => {
    const newItem = {
      id,
      name: title,
      price: preco || 0,
      image
    }
    dispatch(addItem(newItem))
    dispatch(open())
  }

  const isDestaque = location.pathname === '/'
  const isMenuRoute = location.pathname.startsWith('/menu/')

  return (
    <Card isRestaurant={isRestaurant || isMenuRoute}>
      <img
        src={image}
        alt={`Imagem de ${title}`}
        onClick={
          !isHome || isRestaurant ? handleAddToCart : handleStyledLinkClick
        }
        role="button"
        aria-label={`Ver detalhes sobre ${title}`}
        style={{ cursor: 'pointer' }}
      />
      <Infos isRestaurant={isRestaurant || isMenuRoute}>
        {isHome &&
          !isRestaurant &&
          infos.length > 0 &&
          infos.map((info) => <Tag key={info}>{info}</Tag>)}
      </Infos>
      <TituloContainer isRestaurant={isRestaurant || isMenuRoute}>
        <Titulo isRestaurant={!isRestaurant || isMenuRoute}>{title}</Titulo>
        {isDestaque && isFeatured && (
          <Infos>
            <Tag size="big">Destaque da semana</Tag>
            {isHome && infos.map((info) => <Tag key={info}>{info}</Tag>)}
          </Infos>
        )}
        <ClassificationContainer>
          {!isRestaurant &&
            isHome &&
            classification.map((classif, index) => (
              <Star key={index}>
                <span>{classif}</span>
                <img src={star} alt="Estrela" />
              </Star>
            ))}
        </ClassificationContainer>
      </TituloContainer>
      <div className="descricao-container">
        <Descricao isRestaurant={isRestaurant || isMenuRoute}>
          {description}
        </Descricao>
        <Button
          onClick={
            isHome || isRestaurant ? handleStyledLinkClick : handleImageClick
          }
          isRestaurant={isRestaurant || isMenuRoute}
        >
          {isHome || isRestaurant ? 'Saiba mais' : 'Adicionar ao carrinho'}
        </Button>
      </div>
    </Card>
  )
}

export default Product
