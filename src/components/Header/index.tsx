import { Link } from 'react-router-dom'
import { HeaderBar, ImgHeader, RestImg } from './styles'
import bannerImg from '../../assets/images/hero.png'
import logo from '../../assets/images/logo.png'

// Definindo a interface para as props do Header
interface HeaderProps {
  restaurantTitle?: string
  restaurantImage?: string
  restaurantType?: string
}

function capitalizeFirstLetter(text: string): string {
  if (!text) return ''
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
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
        <a href="#">0 - produto(o) no carrinho</a>
      </div>
    </ImgHeader>
    <RestImg>
      <img src={restaurantImage} alt={restaurantTitle} />
      <div className="textsDiv">
        <p>{capitalizeFirstLetter(restaurantType || '')}</p>
        <h4>{restaurantTitle}</h4>
      </div>
    </RestImg>
  </HeaderBar>
)

export default Header
