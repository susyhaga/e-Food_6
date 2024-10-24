import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import Modal from '../../components/Modal'
import ProductsList, { ProductCard } from '../../components/ProductsList'
import { useGetRestaurantByIdQuery } from '../../services/api'
import { useDispatch, useSelector } from 'react-redux'
import {
  setSelectedProduct,
  selectSelectedProduct
} from '../../store/reducers/menu'
import { addItem, open } from '../../store/reducers/cart'

const Restaurant = () => {
  const { id } = useParams<{ id: string }>()
  const { data: restaurantDetails, isLoading } = useGetRestaurantByIdQuery(
    id || ''
  )

  const dispatch = useDispatch()
  const selectedProduct = useSelector(selectSelectedProduct)

  const truncateDescription = (description: string, maxLength: number) => {
    if (description.length <= maxLength) return description
    return `${description.substring(0, maxLength)}...`
  }

  const openModal = (product: ProductCard) => {
    const menuItem = restaurantDetails?.cardapio.find(
      (item) => item.id === product.id
    )
    if (menuItem) {
      dispatch(setSelectedProduct(menuItem))
    }
  }

  const closeModal = () => {
    dispatch(setSelectedProduct(null))
  }

  const handleAddToCart = () => {
    if (selectedProduct) {
      const productToAdd = {
        id: selectedProduct.id,
        name: selectedProduct.nome,
        image: selectedProduct.foto,
        price: selectedProduct.preco || 0
      }
      dispatch(addItem(productToAdd))
      closeModal()
      dispatch(open())
    }
  }

  if (isLoading) return <div>Carregando...</div>

  const productCards: ProductCard[] =
    restaurantDetails?.cardapio.map((item) => ({
      id: item.id,
      title: item.nome,
      description: truncateDescription(item.descricao, 160),
      infos: [restaurantDetails.tipo],
      classification: [restaurantDetails.avaliacao.toString()],
      image: item.foto,
      porcao: item.porcao,
      preco: item.preco
    })) || []

  return (
    <>
      <Header
        restaurantTitle={restaurantDetails?.titulo || ''}
        restaurantImage={restaurantDetails?.capa || ''}
        restaurantType={restaurantDetails?.tipo || ''}
      />
      <ProductsList
        title=""
        background="rosa"
        columns={3}
        onProductClick={openModal}
        card={productCards}
      />
      {selectedProduct && (
        <Modal
          onClose={closeModal}
          title={selectedProduct.nome}
          image={selectedProduct.foto}
          onAddToCart={handleAddToCart}
          description={selectedProduct.descricao}
          porcao={selectedProduct.porcao}
          preco={selectedProduct.preco || 0}
        />
      )}
    </>
  )
}

export default Restaurant
