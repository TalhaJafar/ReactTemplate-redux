import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice.js'
import paymentReducer from './paymentSlice'

export default configureStore({
  reducer: {
      auth: authReducer,
      payment: paymentReducer
  },
})