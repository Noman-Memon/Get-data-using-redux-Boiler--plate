import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from './Reducers/AuthReducer'
import Product from './Reducers/Product'
import Carts from './Reducers/Cart'

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    product: Product,
    carts: Carts,
  },
})
