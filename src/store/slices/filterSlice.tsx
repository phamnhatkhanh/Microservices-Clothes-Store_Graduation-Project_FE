import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type FilterTypes = {
  category?: string;
  price?: number[];
  id:number[];
};

export const initialState: FilterTypes = {
  category:"",
  price: [],
  id: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<FilterTypes>) => {
      const newFilters = { ...state, ...action.payload };
      return newFilters;
    },
  },
});

export const { setFilters } = filterSlice.actions;
export const filterSelector = (state: RootState) => state.filter;
export default filterSlice.reducer;
