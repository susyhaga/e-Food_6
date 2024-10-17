import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Modal from '../../components/Modal'
import ProductsList, { ProductCard } from '../../components/ProductsList'
import { useParams } from 'react-router-dom'

// Definindo a interface para o Cardápio
interface MenuItem {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

// Definindo a interface para os detalhes do Restaurante
interface RestaurantDetails {
  id: number
  preco: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: MenuItem[]
}

const Restaurant = () => {
  const { id } = useParams<{ id: string }>()
  const [restaurantDetails, setRestaurantDetails] =
    useState<RestaurantDetails | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedProduct, setSelectedProduct] = useState<MenuItem | null>(null)

  const truncateDescription = (description: string, maxLength: number) => {
    if (description.length <= maxLength) return description
    return `${description.substring(0, maxLength)}...`
  }

  useEffect(() => {
    const fetchRestaurantDetails = async () => {
      try {
        const res = await fetch(
          `https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}` // Adicionado ID do restaurante na URL
        )
        if (!res.ok) {
          throw new Error('Erro ao buscar detalhes do restaurante')
        }
        const data: RestaurantDetails = await res.json()
        setRestaurantDetails(data)
      } catch (err) {
        setError('Não foi possível carregar os detalhes do restaurante')
      } finally {
        setLoading(false)
      }
    }

    fetchRestaurantDetails()
  }, [id])

  const openModal = (product: ProductCard) => {
    // Envia a descrição completa para o modal
    const menuItem = restaurantDetails?.cardapio.find(
      (item) => item.id === product.id
    )

    if (menuItem) {
      setSelectedProduct({
        foto: menuItem.foto,
        preco: menuItem.preco,
        id: menuItem.id,
        nome: menuItem.nome,
        descricao: menuItem.descricao,
        porcao: menuItem.porcao
      })
    }
  }

  const closeModal = () => {
    setSelectedProduct(null)
  }

  const handleAddToCart = () => {
    if (selectedProduct) {
      console.log(
        // eslint-disable-next-line prettier/prettier
        `Adicionado ao carrinho: ${selectedProduct.nome
        } - R$ ${selectedProduct.preco.toFixed(2)}`
      )
      closeModal()
    }
  }

  if (loading) return <div>Carregando...</div>
  if (error) return <div>{error}</div>

  const productCards: ProductCard[] =
    restaurantDetails?.cardapio.map((item) => ({
      id: item.id,
      title: item.nome,
      description: truncateDescription(item.descricao, 160),
      infos: [restaurantDetails.tipo],
      classification: [restaurantDetails.avaliacao.toString()],
      image: item.foto,
      porcao: item.porcao
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
          preco={selectedProduct.preco}
        />
      )}
    </>
  )
}

export default Restaurant
