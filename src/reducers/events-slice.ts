import { createSlice } from '@reduxjs/toolkit';
import { ICustomAlert, IEvent, IFormData } from 'types';
import { SUCCESS_TYPE } from '../constants';
import { eventsActions, getEventsData } from '../actions/events.action';
import { EVENTS_CREATE_INPUT_FORM } from '../components/manage-events/constants';

export interface EventsState {
  isLoading: boolean;
  eventLists: IEvent[];
  alert: ICustomAlert;
  createFormFields : IFormData[];
}

const initialState: EventsState = {
  isLoading: false,
  eventLists: [],
  alert: { show: false },
  createFormFields : EVENTS_CREATE_INPUT_FORM
};

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    hideAlert(state) {
      state.alert = { show: false };
    },
    setOptionsData(state, action) {
      const data = action.payload;
      state.createFormFields = state.createFormFields.map((option) => {
        const {id} = option;
        return {...option, options : data[id]?.data || []};
      } ,[]);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getEventsData.fulfilled, (state, action) => {
        state.isLoading = false;
        const { type, data, error } = action.payload;
        if (type === SUCCESS_TYPE) {
          state.eventLists = data;
        } else {
          state.alert = { show: true, ...error };
        }
      })
      .addCase(getEventsData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(eventsActions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(eventsActions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.alert = { show: true, ...action.payload };
      });
  },
});

export const { hideAlert, setOptionsData } = eventsSlice.actions;

export default eventsSlice.reducer;
