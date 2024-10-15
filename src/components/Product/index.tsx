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
import { Link, useNavigate } from 'react-router-dom'

type Props = {
  title: string
  classification?: string[]
  description: string
  infos: string[]
  image: string
  isRestaurant?: boolean
  isHome?: boolean
}

const Product = ({
  title,
  classification = [],
  description,
  infos,
  image,
  isRestaurant,
  isHome
}: Props) => {
  const navigate = useNavigate()

  const handleStyledLinkClick = () => {
    navigate(isRestaurant ? '/' : '/restaurant')
  }

  return (
    <Card className="container" isRestaurant={isRestaurant}>
      {/* Mantendo o Link existente */}
      <Link to="/restaurant" aria-label={`Ir para ${title}`}>
        <img src={image} alt={`Imagem de ${title}`} />
      </Link>

      <Infos>
        {!isRestaurant && infos.map((info) => <Tag key={info}>{info}</Tag>)}
      </Infos>

      <TituloContainer isRestaurant={isRestaurant}>
        <Titulo isRestaurant={isRestaurant}>{title}</Titulo>
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
        <Descricao isRestaurant={isRestaurant}>{description}</Descricao>
        <Button onClick={handleStyledLinkClick} isRestaurant={isRestaurant}>
          {isRestaurant ? 'Adicionar ao carrinho' : 'Saiba mais'}
        </Button>
      </div>
    </Card>
  )
}

export default Product
