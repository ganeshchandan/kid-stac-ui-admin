import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  ACTION_METHOD_MAP,
  VENDOR_ACTIONS_URL,
  GET_VENDORS_URL,
  GET_VENDORS,
  VENDORS_ACTIONS,
} from '../constants';
import { IActionType, IFormValues } from '../types/common';

export const getVendorsAction = async (columns?: string) =>
  await fetch(`${GET_VENDORS_URL}/${columns || ''}`);

export const getVendorsData = createAsyncThunk(
  GET_VENDORS,
  async (columns?: string | undefined) => {
    try {
      const response = await getVendorsAction(columns);
      return response.json();
    } catch (err) {
      console.log('error occured');
    }
  },
);

export const vendorsActions = createAsyncThunk(
  VENDORS_ACTIONS,
  async ({
    data,
    actionType,
  }: {
    data: IFormValues;
    actionType: IActionType;
  }) => {
    try {
      const response = await fetch(VENDOR_ACTIONS_URL[actionType], {
        headers: {
          'Content-Type': 'application/json',
        },
        method: ACTION_METHOD_MAP[actionType],
        body: JSON.stringify(data),
      });
      return response.json();
    } catch (err) {
      console.log('error occured');
    }
  },
);
