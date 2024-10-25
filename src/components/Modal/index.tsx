import React from 'react'
import { useSelector } from 'react-redux'
import { RootReducer as RootState } from '../../store'
import close from '../../assets/images/close.png'

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

interface ModalProps {
  title: string
  description: string
  image: string
  preco: number
  porcao?: string
  onClose: () => void
  onAddToCart: () => void
  onOpenCart: () => void
}
const Modal = ({
  title,
  description,
  image,
  preco,
  porcao,
  onClose,
  onAddToCart,
  onOpenCart
}: ModalProps) => {
  const isModalOpen = useSelector((state: RootState) => state.modal.isModalOpen)

  if (!isModalOpen) return null

  const handleAddToCartAndOpen = () => {
    onAddToCart()
    onOpenCart()
  }

  return (
    <ModalWrapper onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ButtonClose onClick={onClose}>
          <img src={close} alt="Fechar modal" />
        </ButtonClose>
        <Image src={image} alt={`Imagem de ${title}`} />
        <TextContainer>
          <Title>{title}</Title>
          <Description>{description}</Description>
          {porcao && <p>{`Porção: ${porcao}`}</p>}
          <Button onClick={handleAddToCartAndOpen}>
            Adicionar ao carrinho - R$ {preco.toFixed(2)}
          </Button>
        </TextContainer>
      </ModalContent>
    </ModalWrapper>
  )
}

export default Modal
