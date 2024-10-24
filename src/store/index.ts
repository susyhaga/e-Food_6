import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './reducers/cart'
import selectedProductReducer from './reducers/menu'
import api from '../services/api'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    selectedProduct: selectedProductReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
