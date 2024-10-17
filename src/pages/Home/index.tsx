import { useCallback, useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import ProductsList, {
  ProductCard as ProductListCard
} from '../../components/ProductsList'
import { useNavigate } from 'react-router-dom'

interface Restaurant {
  id: number
  titulo: string
  avaliacao: number
  descricao: string
  tipo: string
  capa: string
}

const Home = () => {
  const [restaurantCards, setRestaurantCards] = useState<ProductListCard[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()

  const handleProductClick = useCallback(
    (product: ProductListCard) => {
      navigate(`/menu/${product.id}`) // Navega para a rota do menu do restaurante com o id correspondente
    },
    [navigate]
  )

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const res = await fetch(
          'https://fake-api-tau.vercel.app/api/efood/restaurantes'
        )
        if (!res.ok) {
          throw new Error('Erro ao buscar restaurantes')
        }
        const data: Restaurant[] = await res.json()

        const mappedData = data.map((restaurant) => ({
          id: restaurant.id,
          title: restaurant.titulo,
          classification: [restaurant.avaliacao.toString()],
          description: restaurant.descricao,
          infos: [restaurant.tipo],
          image: restaurant.capa
        }))
        setRestaurantCards(mappedData)
      } catch (err) {
        setError('Não foi possível carregar os restaurantes')
      } finally {
        setLoading(false)
      }
    }

    fetchRestaurants()
  }, [])

  if (loading) return <div>Carregando...</div>
  if (error) return <div>{error}</div>

  return (
    <>
      {restaurantCards.length > 0 && <Banner id={restaurantCards[0].id} />}
      <ProductsList
        card={restaurantCards}
        background="branca"
        columns={2}
        title="Restaurantes"
        onProductClick={handleProductClick} // Passa a função de clique aqui
      />
    </>
  )
}

export default Home
