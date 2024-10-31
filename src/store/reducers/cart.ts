import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CartItem {
  id: number
  name: string
  image: string
  price: number
}

type CartState = {
  isOpen: boolean
  items: CartItem[]
}

const initialState: CartState = {
  isOpen: false,
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    open(state) {
      state.isOpen = true
    },
    close(state) {
      state.isOpen = false
    },
    addItem(state, action: PayloadAction<CartItem>) {
      state.items.push(action.payload)
    },
    removeItem(state, action: PayloadAction<CartItem>) {
      const index = state.items.findIndex(
        (item) =>
          item.id === action.payload.id &&
          item.name === action.payload.name &&
          item.price === action.payload.price
      )

      if (index !== -1) {
        state.items.splice(index, 1)
      }
    },
    clearCart(state) {
      state.items = [] // Esvazia o array de itens
    }
  }
})

export const { open, close, addItem, removeItem, clearCart } = cartSlice.actions
export default cartSlice.reducer
