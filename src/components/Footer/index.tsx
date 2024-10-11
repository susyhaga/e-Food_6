import { Link } from 'react-router-dom'
import { Container, FooterSection, SocialMedia } from './styles' // Assegure-se que os estilos estão corretos
import logo from '../../assets/images/logo.png'
import insta from '../../assets/images/insta.svg'
import facebook from '../../assets/images/face.svg'
import twitter from '../../assets/images/twitter.svg'

const Footer = () => (
  <Container>
    <div className="container">
      {' '}
      {/* A classe container deve ser aplicada aqui */}
      <FooterSection>
        <Link to="/">
          <img src={logo} alt="logo e-food" />
        </Link>
      </FooterSection>
      <SocialMedia>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={insta} alt="Instagram" />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebook} alt="Facebook" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={twitter} alt="Twitter" />
        </a>
      </SocialMedia>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </p>
    </div>
  </Container>
)

export default Footer
