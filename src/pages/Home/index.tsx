import React from 'react'
import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import { useGetRestaurantsQuery } from '../../services/api'

// Modelo para um restaurante e item do menu
export interface MenuItem {
  avaliacao: string[]
  foto: string
  nome: string
  descricao: string
  id: number
  title: string
  classification?: string[]
  description: string
  image: string
  porcao?: string
  infos: string[]
  preco?: number
}

export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: MenuItem[]
}

const Home = () => {
  const { data: Restaurants } = useGetRestaurantsQuery()

  if (Restaurants && Restaurants.length > 0) {
    const productCards = Restaurants.map((restaurant) => ({
      id: restaurant.id,
      title: restaurant.titulo,
      description: restaurant.descricao,
      image: restaurant.capa,
      infos: [`${restaurant.tipo}`],
      classification: restaurant.avaliacao
        ? [restaurant.avaliacao.toString()]
        : []
    }))

    return (
      <>
        {/* Verifique se Menu e Menu[0] existem */}
        {Restaurants && Restaurants.length > 0 && (
          <Banner id={Restaurants[0].id} />
        )}
        <ProductsList
          card={productCards}
          background="branca"
          columns={2}
          title="Restaurantes"
        />
      </>
    )
  }

  return null
}
export default Home
