import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { HeaderBar, ImgHeader, RestImg } from './styles'
import bannerImg from '../../assets/images/hero.png'
import logo from '../../assets/images/logo.png'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

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
}: HeaderProps) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const openCart = () => {
    dispatch(open()) // Abre o carrinho
  }

  return (
    <HeaderBar>
      <ImgHeader style={{ backgroundImage: `url(${bannerImg})` }}>
        <div className="container">
          <Link to="/">
            <h4>Restaurantes</h4>
          </Link>
          <Link to="/">
            <img src={logo} alt="logo e-food" />
          </Link>
          <button type="button" onClick={openCart}>
            {items.length} - produto(s) no carrinho
          </button>
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
}

export default Header
