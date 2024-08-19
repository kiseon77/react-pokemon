import { createSlice } from "@reduxjs/toolkit";
import { fetchMultiplePokemonById } from "./thunk";

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    data: [],
    loading: true,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMultiplePokemonById.pending, (state) => {
        console.log("pending");
        state.loading = true;
      })
      .addCase(fetchMultiplePokemonById.rejected, (state) => {
        console.log("rejected");
        state.loading = false;
      })
      .addCase(fetchMultiplePokemonById.fulfilled, (state, action) => {
        console.log("fulfilled");
        state.loading = false;
        state.data = action.payload;
      });
  }
});
