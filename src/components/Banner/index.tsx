import { Link } from 'react-router-dom'
import { Img, Titulo } from './styles'
import bannerImg from '../../assets/images/hero.png'
import logo from '../../assets/images/logo.png'

const Banner = () => {
  return (
    <Img
      className="container"
      style={{
        backgroundImage: `url(${bannerImg})`
      }}
    >
      <div className="container">
        <Link to="/restaurant">
          <img src={logo} alt="logo e-food" />
        </Link>
        <div>
          <Titulo>
            Viva experiências gastronômicas no conforto da sua casa
          </Titulo>
        </div>
      </div>
    </Img>
  )
}

export default Banner
