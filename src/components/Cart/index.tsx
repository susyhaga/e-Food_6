import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../components/Button'
import { OverLay, CartContainer, Sidebar, Prices, ProductInfos } from './styles'
import { RootReducer } from '../../store'
import { close, removeItem } from '../../store/reducers/cart'
import DeliveryForm from '../DeliveryForm'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const [showDelivery, setShowDelivery] = useState(false)

  const closeCart = () => {
    dispatch(close())
  }

  const stopPropagation = (event: React.MouseEvent) => {
    event.stopPropagation()
  }

  const handleComplete = () => {
    closeCart()
    setShowDelivery(false)
  }

  const totalPrice = items.reduce(
    (total, item) => total + (typeof item.price === 'number' ? item.price : 0),
    0
  )

  // Renderiza o formulário de entrega se `showDelivery` for true
  if (showDelivery) {
    return (
      <DeliveryForm
        onClose={() => setShowDelivery(false)}
        onComplete={handleComplete}
        title="Formulário de Entrega"
      />
    )
  }

  const handleContinue = () => {
    if (items.length === 0) {
      alert(
        'Por favor, adicione pelo menos um item ao carrinho antes de continuar com a entrega.'
      )
      return
    }
    setShowDelivery(true)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <OverLay onClick={closeCart} />

      <Sidebar onClick={stopPropagation}>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <ProductInfos>
                <img src={item.image} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <span>
                    R${' '}
                    {item.price !== undefined
                      ? item.price.toFixed(2)
                      : 'Preço indisponível'}
                  </span>
                </div>
                <button
                  className="trash-button"
                  type="button"
                  onClick={() => dispatch(removeItem(item))}
                />
              </ProductInfos>
            </li>
          ))}
        </ul>
        <Prices>
          Valor total<span>R$ {totalPrice.toFixed(2)}</span>
        </Prices>
        <Button
          title="Clique aqui para continuar com a compra"
          type="button"
          onClick={handleContinue}
          disabled={items.length === 0}
        >
          Continuar com a entrega
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
