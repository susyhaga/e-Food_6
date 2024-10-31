import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurant } from '../pages/Home'

// Define o tipo para o payload do checkout
type CheckoutPayload = {
  products: {
    id: number
    price: number
  }[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement?: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

const api = createApi({
  reducerPath: 'restaurantApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/restaurantes'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Restaurant[], void>({
      query: () => '' // Endpoint que retorna todos os restaurantes
    }),
    getFeaturedRestaurants: builder.query<Restaurant[], void>({
      query: () => 'destacados' // Endpoint para restaurantes destacados
    }),
    getRestaurantById: builder.query<Restaurant, string>({
      query: (id) => `${id}` // Endpoint que retorna detalhes de um restaurante específico com base no ID
    }),
    // Endpoint para confirmar o checkout (uso de POST = mutation)
    checkout: builder.mutation<any, CheckoutPayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

// Exportar os hooks gerados
export const {
  useGetRestaurantsQuery,
  useGetFeaturedRestaurantsQuery,
  useGetRestaurantByIdQuery,
  useCheckoutMutation // Hook para a mutação de checkout
} = api

export default api
