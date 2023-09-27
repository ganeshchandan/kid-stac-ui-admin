import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  ACTION_METHOD_MAP,
  GET_CATEGORIES,
  CATEGORIES_ACTIONS,
  CATEGORIES_ACTIONS_URL,
  GET_CATEGORIES_URL,
} from '../constants';
import { IActionType, IFormValues } from '../types/common';

export const getCategoriesAction = async () => await fetch(GET_CATEGORIES_URL);

export const getCategoriesData = createAsyncThunk(GET_CATEGORIES, async () => {
  try {
    const response = await getCategoriesAction();
    return response.json();
  } catch (err) {
    //   return rejectWithValue(err);
    console.log('error occured');
  }
});

export const categoriesActions = createAsyncThunk(
  CATEGORIES_ACTIONS,
  async ({
    data,
    actionType,
  }: {
    data: IFormValues;
    actionType: IActionType;
  }) => {
    try {
      const response = await fetch(CATEGORIES_ACTIONS_URL[actionType], {
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
