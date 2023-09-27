import { createSlice } from '@reduxjs/toolkit';
import { ICustomAlert, ICategory } from 'types';
import { SUCCESS_TYPE } from '../constants';
import {
  categoriesActions,
  getCategoriesData,
} from '../actions/category.action';

export interface CategoriesState {
  isLoading: boolean;
  categoriesLists: ICategory[];
  alert: ICustomAlert;
}

const initialState: CategoriesState = {
  isLoading: false,
  categoriesLists: [],
  alert: { show: false },
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    hideAlert(state) {
      state.alert = { show: false };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategoriesData.fulfilled, (state, action) => {
        state.isLoading = false;
        const { type, data, error } = action.payload;
        if (type === SUCCESS_TYPE) {
          state.categoriesLists = data;
        } else {
          state.alert = { show: true, ...error };
        }
      })
      .addCase(getCategoriesData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(categoriesActions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(categoriesActions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.alert = { show: true, ...action.payload };
      });
  },
});

export const { hideAlert } = categoriesSlice.actions;

export default categoriesSlice.reducer;
