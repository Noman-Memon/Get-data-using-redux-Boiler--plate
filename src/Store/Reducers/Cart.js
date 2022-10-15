import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { BASE_URL } from '../../App/api.js'
import {
  getDataByBody,
  getRequest,
  postRequest,
  putRequest,
} from '../../App/fetch'

const initialState = {
  Carts: [],
  fetchingAccounts: false,
}

// GET REQUESTS
export const GetCarts = createAsyncThunk('GetCarts', async () => {
  const result = await getRequest(`${BASE_URL}/carts`, 'get')
  return result
})
// ADD REQUESTS
// PUT REQUESTS
// Update REQUESTS
// Delete REQUESTS

const cartsReducer = createSlice({
  name: 'carts',
  initialState,
  reducers: {},
  extraReducers: {
    [GetCarts.fulfilled]: (state, action) => {
      state.fetchingAccounts = false
      const data = action.payload
      state.Carts = data
      return state
    },

    [GetCarts.pending]: (state, action) => {
      state.fetchingAccounts = true
      return state
    },
    // [GetProducts.rejected]: (state, action) => {
    //   state.fetchingAccounts = false;
    //   return state;
    // },
  },
})

export default cartsReducer.reducer
