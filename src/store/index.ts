import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../reducers/user-slice';
import vendorSlice from '../reducers/vendor-slice';
import categoriesSlice from '../reducers/categories-slice';
import eventsSlice from '../reducers/events-slice';

export const store = configureStore({
  reducer: {
    users: userSlice,
    vendors: vendorSlice,
    categories: categoriesSlice,
    events: eventsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
