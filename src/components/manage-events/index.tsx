import { memo, useEffect } from 'react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import TableWithActions from '../custom/table-with-actions';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import AppSpinner from '../custom/spinner';
import { IActionType, ICustomToast, IFormValues } from '../../types/common';
import { hideAlert } from '../../reducers/user-slice';
import { EVENTS_CREATE_INPUT_FORM, EVENTS_TABLE_COL } from './constants';
import { eventsActions, getEventsData } from '../../actions/events.action';

const ManageEvents = () => {
  const dispatch = useDispatch<AppDispatch>();
  const events = useSelector((state: RootState) => state.events);
  const {eventLists, isLoading, alert , createFormFields} = events;

  useEffect(() => {
    dispatch(getEventsData());
  }, []);

  const handleFormSaveAction = (
    data: IFormValues,
    actionType: IActionType | undefined,
  ) => {
    if (actionType) {
      dispatch(eventsActions({ data : {...data,
        'address': 'TEST address',
        'country': 'INDIA',
        'lat': 256,
        'long': 125,
        'postal_code': 576210,
        'state': 'KA',
      }, actionType }))
        .unwrap()
        .then(() => {
          dispatch(getEventsData());
        });
    }
  };

  const updateAlerts = () => {
    dispatch(hideAlert());
  };

  return (
    <>
      <TableWithActions
        rowData={eventLists}
        columnDefs={EVENTS_TABLE_COL}
        rowHeight={35}
        formMetadata={createFormFields}
        handleFormSaveAction={handleFormSaveAction}
        alert={{ ...alert, updateAlerts } as ICustomToast}
      />
      {isLoading && <AppSpinner />}
    </>
  );
};

export default memo(ManageEvents);
