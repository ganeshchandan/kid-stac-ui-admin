import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  GET_USERS,
  GET_USERS_URL,
  USER_ACTIONS_URL,
  USER_ACTIONS,
  ACTION_METHOD_MAP,
} from '../constants';
import { IActionType, IFormValues } from '../types/common';

export const getUsersData = createAsyncThunk(GET_USERS, async () => {
  try {
    const response = await fetch(GET_USERS_URL);
    return response.json();
  } catch (err) {
    //   return rejectWithValue(err);
    console.log('error occured');
  }
});

export const userActions = createAsyncThunk(
  USER_ACTIONS,
  async ({
    data,
    actionType,
  }: {
    data: IFormValues;
    actionType: IActionType;
  }) => {
    try {
      const response = await fetch(USER_ACTIONS_URL[actionType], {
        headers: {
          'Content-Type': 'application/json',
        },
        method: ACTION_METHOD_MAP[actionType],
        body: JSON.stringify(data),
      });
      return response.json();
    } catch (err) {
      //   return rejectWithValue(err);
      console.log('error occured');
    }
  },
);
