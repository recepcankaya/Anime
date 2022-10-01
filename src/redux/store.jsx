import { configureStore } from "@reduxjs/toolkit"
import animeSlice from "./slices/animeSlice"

export const store = configureStore({
  reducer: {
    anime: animeSlice,
  },
})
