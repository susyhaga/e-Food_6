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

type Props = {
  id: number
  title: string
  classification?: string[]
  description: string
  infos: string[]
  image: string
  porcao?: string
  preco?: number
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
  isRestaurant,
  isHome,
  isFeatured,
  onClick
}: Props) => {
  const navigate = useNavigate()
  const location = useLocation()

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

  const isDestaque = location.pathname === '/'
  const isMenuRoute = location.pathname.startsWith('/menu/')

  return (
    <Card isRestaurant={isRestaurant || isMenuRoute}>
      <img
        src={image}
        alt={`Imagem de ${title}`}
        onClick={handleImageClick}
        role="button"
        aria-label={`Ver detalhes sobre ${title}`}
        style={{ cursor: 'pointer' }}
      />
      <Infos isRestaurant={isRestaurant || isMenuRoute}>
        {isHome &&
          !isRestaurant &&
          infos.map((info) => <Tag key={info}>{info}</Tag>)}
      </Infos>
      <TituloContainer isRestaurant={isRestaurant || isMenuRoute}>
        <Titulo isRestaurant={!isRestaurant || isMenuRoute}>{title}</Titulo>{' '}
        {/* Título renderizado */}
        {isDestaque && isFeatured && (
          <Infos>
            <Tag size="big">Destaque da semana</Tag>
            {isHome && infos.map((info) => <Tag key={info}>{info}</Tag>)}
          </Infos>
        )}
        <ClassificationContainer>
          {!isRestaurant &&
            isHome &&
            classification.map((classif) => (
              <Star key={classif}>
                {classif}
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
          onClick={handleStyledLinkClick}
          isRestaurant={isRestaurant || isMenuRoute}
        >
          {isHome || isRestaurant ? 'Saiba mais' : 'Adicionar ao carrinho'}
        </Button>
      </div>
    </Card>
  )
}

export default Product
