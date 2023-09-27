import { createSlice } from '@reduxjs/toolkit';
import { ICustomAlert, IVendor } from 'types';
import { getVendorsData, vendorsActions } from '../actions/vendors.actions';
import { SUCCESS_TYPE } from '../constants';

export interface VendorState {
  isLoading: boolean;
  vendorsLists: IVendor[];
  alert: ICustomAlert;
}

const initialState: VendorState = {
  isLoading: false,
  vendorsLists: [],
  alert: { show: false },
};

export const vendorSlice = createSlice({
  name: 'vendor',
  initialState,
  reducers: {
    hideAlert(state) {
      state.alert = { show: false };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getVendorsData.fulfilled, (state, action) => {
        state.isLoading = false;
        const { type, data, error } = action.payload;
        if (type === SUCCESS_TYPE) {
          state.vendorsLists = data;
        } else {
          state.alert = { show: true, ...error };
        }
      })
      .addCase(getVendorsData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(vendorsActions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(vendorsActions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.alert = { show: true, ...action.payload };
      });
  },
});

export const { hideAlert } = vendorSlice.actions;

export default vendorSlice.reducer;
