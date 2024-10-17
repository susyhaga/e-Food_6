import { Link } from 'react-router-dom'
import { HeaderBar, ImgHeader, LinkCard, RestImg } from './styles'
import bannerImg from '../../assets/images/hero.png'
import logo from '../../assets/images/logo.png'

// Definindo a interface para as props do Header
interface HeaderProps {
  restaurantTitle?: string
  restaurantImage?: string
  restaurantType?: string
}

const Header = ({
  restaurantTitle,
  restaurantImage,
  restaurantType
}: HeaderProps) => (
  <HeaderBar>
    <ImgHeader style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="container">
        <Link to="/">
          <h4>Restaurantes</h4>
        </Link>
        <Link to="/">
          <img src={logo} alt="logo e-food" />
        </Link>
        <LinkCard href="#">0 - produto(o) no carrinho</LinkCard>
      </div>
    </ImgHeader>
    <RestImg>
      <img src={restaurantImage} alt={restaurantTitle} />
      <div className="textsDiv">
        <p>{restaurantType}</p>
        <h4>{restaurantTitle}</h4>
      </div>
    </RestImg>
  </HeaderBar>
)

export default Header
