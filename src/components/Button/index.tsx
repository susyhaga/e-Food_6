import { ButtonContainer, ButtonLink } from './styles'

type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void // recebe uma função sem argumento
  children: string
  bgColor?: string
  disabled?: boolean // Adicione esta linha
}

const Button = ({
  type,
  title,
  onClick,
  to,
  children,
  bgColor,
  disabled
}: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer
        type="button"
        title={title}
        onClick={onClick}
        bgColor={bgColor}
        disabled={disabled} // para fechar cart
      >
        {children}
      </ButtonContainer>
    )
  }

  if (type === 'link' && to) {
    return (
      <ButtonLink to={to} title={title} bgColor={bgColor}>
        {children}
      </ButtonLink>
    )
  }

  return null
}

export default Button
