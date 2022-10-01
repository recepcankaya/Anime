import axios from "axios"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
  items: [],
}

export const fetchData = createAsyncThunk("anime/fetchData", async () => {
  const res = await axios.get(`${process.env.REACT_APP_API_KEY}`)
  // console.log(res.data.data)
  return res.data.data
})

export const animeSlice = createSlice({
  name: "anime",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchData.fulfilled]: (state, action) => {
      state.items = action.payload
    },
  },
})

export const items = (state) => state.anime.items
export const inputItems = (state) => state.anime.inputItems
export default animeSlice.reducer
