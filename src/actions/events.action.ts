import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  ACTION_METHOD_MAP,
  EVENTS_ACTIONS,
  EVENTS_ACTIONS_URL,
  GET_EVENTS,
  GET_EVENTS_URL,
} from '../constants';
import { IActionType, IFormValues } from '../types/common';
import { getVendorsAction } from './vendors.actions';
import { getCategoriesAction } from './category.action';
import { setOptionsData } from '../reducers/events-slice';

export const getEventsData = createAsyncThunk(GET_EVENTS, async (_,{ dispatch }) => {
  try {
    const response = await fetch(GET_EVENTS_URL);
    Promise.all([
      getVendorsAction('?infoDetails=name'),
      getCategoriesAction(),
    ]).then(async (res) => {
      const vendor_id = await res[0].json();
      const category_id = await res[1].json();
      dispatch(setOptionsData({category_id , vendor_id}));
    });

    return response.json();
  } catch (err) {
    //   return rejectWithValue(err);
    console.log('error occured');
  }
});

export const eventsActions = createAsyncThunk(
  EVENTS_ACTIONS,
  async ({
    data,
    actionType,
  }: {
    data: IFormValues;
    actionType: IActionType;
  }) => {
    try {
      const response = await fetch(EVENTS_ACTIONS_URL[actionType], {
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
