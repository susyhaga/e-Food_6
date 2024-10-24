// No seu arquivo Modal.tsx
import {
  ModalWrapper,
  ModalContent,
  Image,
  Title,
  Description,
  Button,
  ButtonClose,
  TextContainer
} from './styles'
import close from '../../assets/images/close.png'

interface ModalProps {
  onClose: () => void
  title: string
  description: string
  image: string
  onAddToCart: () => void
  preco: number
  porcao?: string
  children?: JSX.Element
}

const Modal = ({
  onClose,
  title,
  description,
  image,
  onAddToCart,
  preco,
  porcao
}: ModalProps) => {
  return (
    <ModalWrapper onClick={onClose}>
      <div className="container">
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <ButtonClose onClick={onClose}>
            <img src={close} alt="" />
          </ButtonClose>
          <Image src={image} alt={`Imagem de ${title}`} />
          <TextContainer>
            <Title>{title}</Title>
            <Description>{description}</Description>
            {porcao && <p>{`Porção: ${porcao}`}</p>}
            <Button onClick={onAddToCart}>
              Adicionar ao carrinho - R$ {preco.toFixed(2)}
            </Button>
          </TextContainer>
        </ModalContent>
      </div>
    </ModalWrapper>
  )
}

export default Modal
