import { useDispatch, useSelector } from 'react-redux'
import Button from '../../components/Button'
import { OverLay, CartContainer, Sidebar, Prices, ProductInfos } from './styles'
import { RootReducer } from '../../store'
import { close, removeItem } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    console.log('Fechando carrinho...')
    dispatch(close())
  }

  const stopPropagation = (event: React.MouseEvent) => {
    event.stopPropagation()
  }

  // Debugging
  console.log('Itens no carrinho:', items)

  const totalPrice = items.reduce((total, item) => {
    console.log(`Item: ${item.name}, Preço: ${item.price}`)
    return total + (typeof item.price === 'number' ? item.price : 0)
  }, 0)

  console.log('Preço total:', totalPrice) // Verifique o total

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
                  onClick={() => dispatch(removeItem(item))} // Passando o objeto item
                />
              </ProductInfos>
            </li>
          ))}
        </ul>
        <Prices>
          Valor total<span>R$ {totalPrice.toFixed(2)}</span>
        </Prices>
        <Button title="Clique aqui para continuar com a compra" type="button">
          Continuar com a entrega
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
