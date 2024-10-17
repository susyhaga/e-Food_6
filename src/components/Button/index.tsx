import { Link } from 'react-router-dom'
import { ButtonContainer, ButtonLink } from './styles'

type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void //recebe uma funcao sem argumento
  children: string //texto do botao
}

const Button = ({ type, title, onClick, to, children }: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer type="button" title={title} onClick={onClick}>
        {children}
      </ButtonContainer>
    )
  }

  return (
    <ButtonLink to={to as string} title={title} onClick={onClick}>
      <Link to="/menu">Saiba mais</Link>
    </ButtonLink>
  )
}
export default Button //Exportar para: Banner,
