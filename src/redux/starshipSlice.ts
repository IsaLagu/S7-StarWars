import { createSlice } from "@reduxjs/toolkit";
import { Starship } from "../types";

interface StarshipState {
  list: Starship[];
  page: number;
  count: number;
  currentStarship: Starship | null;
}

const initialState: StarshipState = {
  list: [],
  page: 1,
  count: 0,
  currentStarship: null,
};

export const starshipSlice = createSlice({
  name: "starship",
  initialState,
  reducers: {
    setStarships: (state, action) => {
      state.list = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setCount: (state, action) => {
      state.count = action.payload;
    },
    setCurrentStarship: (state, action) => {
      state.currentStarship = action.payload;
    },
  },
});

export const { setStarships, setPage, setCount, setCurrentStarship } = starshipSlice.actions;
export default starshipSlice.reducer;
