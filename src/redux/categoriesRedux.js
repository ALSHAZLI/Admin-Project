import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "categorie",
  initialState: {
    categories: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getCatStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getCatSuccess: (state, action) => {
      state.isFetching = false;
      state.categories = action.payload;
    },
    getCatFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
     //GET ALL
     deleteCatStart: (state) => {
        state.isFetching = true;
        state.error = false;
      },
      deleteCatSuccess: (state, action) => {
        state.isFetching = false;
        state.products.splice(
          state.categories.findIndex((item) => item.id === action.payload),
          1
        );
      },
      deleteCatFailure: (state) => {
        state.isFetching = false;
        state.error = true;
      },
 
  },
});

export const {
  getCatStart,
  getCatSuccess,
  getCatFailure,
  deleteCatStart,
  deleteCatSuccess,
  deleteCatFailure
 
} = categorySlice.actions;

export default categorySlice.reducer;
