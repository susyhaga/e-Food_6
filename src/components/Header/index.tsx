import { Link } from 'react-router-dom'
import { HeaderBar, ImgHeader, LinkCard, RestImg } from './styles'
import bannerImg from '../../assets/images/hero.png'
import logo from '../../assets/images/logo.png'
import italian from '../../assets/images/pastaMar.png'

const Header = () => (
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
      <img src={italian} alt="" />
      <div className="textsDiv">
        <p>Italiana</p>
        <h4>La Dolce Vita Trattoria</h4>
      </div>
    </RestImg>
  </HeaderBar>
)

export default Header
