import { createSlice } from '@reduxjs/toolkit';
import { ICustomAlert, IUser } from 'types';
import { getUsersData, userActions } from '../actions/user.action';
import { SUCCESS_TYPE } from '../constants';

export interface UserState {
  isLoading: boolean;
  userLists: IUser[];
  alert: ICustomAlert;
}

const initialState: UserState = {
  isLoading: false,
  userLists: [],
  alert: { show: false },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    hideAlert(state) {
      state.alert = { show: false };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsersData.fulfilled, (state, action) => {
        state.isLoading = false;
        const { type, data, error } = action.payload;
        if (type === SUCCESS_TYPE) {
          state.userLists = data;
        } else {
          state.alert = { show: true, ...error };
        }
      })
      .addCase(getUsersData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(userActions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(userActions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.alert = { ...action.payload, show: true };
      });
  },
});

export const { hideAlert } = userSlice.actions;

export default userSlice.reducer;
