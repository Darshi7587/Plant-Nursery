import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const product = action.payload
      const existingItem = state.cart.find((item) => item.id === product.id)

      if (!existingItem) {
        state.cart.push({
          ...product,
          quantity: 1,
        })
      }
    },
    increaseQuantity: (state, action) => {
      const productId = action.payload
      const item = state.cart.find((cartItem) => cartItem.id === productId)

      if (item) {
        item.quantity += 1
      }
    },
    decreaseQuantity: (state, action) => {
      const productId = action.payload
      const itemIndex = state.cart.findIndex((cartItem) => cartItem.id === productId)

      if (itemIndex >= 0) {
        const item = state.cart[itemIndex]

        if (item.quantity > 1) {
          item.quantity -= 1
        } else {
          state.cart.splice(itemIndex, 1)
        }
      }
    },
    removeItem: (state, action) => {
      const productId = action.payload
      state.cart = state.cart.filter((item) => item.id !== productId)
    },
  },
})

export const { addItem, increaseQuantity, decreaseQuantity, removeItem } =
  cartSlice.actions

export const selectCartItems = (state) => state.cart.cart

export const selectTotalQuantity = (state) =>
  state.cart.cart.reduce((total, item) => total + item.quantity, 0)

export const selectTotalCost = (state) =>
  state.cart.cart.reduce((total, item) => total + item.price * item.quantity, 0)

export default cartSlice.reducer
