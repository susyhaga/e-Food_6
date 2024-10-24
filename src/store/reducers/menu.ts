// src/slices/selectedProductSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MenuItem } from '../../pages/Home'

interface SelectedProductState {
  selectedProduct: MenuItem | null
}

const initialState: SelectedProductState = {
  selectedProduct: null
}

const selectedProductSlice = createSlice({
  name: 'selectedProduct',
  initialState,
  reducers: {
    setSelectedProduct(state, action: PayloadAction<MenuItem | null>) {
      state.selectedProduct = action.payload
    }
  }
})

export const { setSelectedProduct } = selectedProductSlice.actions
export const selectSelectedProduct = (state: {
  selectedProduct: SelectedProductState
}) => state.selectedProduct.selectedProduct

export default selectedProductSlice.reducer
