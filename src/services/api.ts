import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurant } from '../pages/Home'

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
    })
  })
})

// Exportar os hooks gerados
export const {
  useGetRestaurantsQuery,
  useGetFeaturedRestaurantsQuery,
  useGetRestaurantByIdQuery
} = api

export default api
