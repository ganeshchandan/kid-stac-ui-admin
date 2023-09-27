import { memo, useEffect } from 'react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import TableWithActions from '../custom/table-with-actions';
import { USER_CREATE_INPUT_FORM, USER_TABLE_COL } from './constants';
import { getUsersData, userActions } from '../../actions/user.action';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import AppSpinner from '../custom/spinner';
import { IActionType, ICustomToast, IFormValues } from '../../types/common';
import { hideAlert } from '../../reducers/user-slice';

const ManageUsers = () => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector((state: RootState) => state.users);
  const { userLists, isLoading, alert } = users;

  useEffect(() => {
    dispatch(getUsersData());
  }, []);

  const handleFormSaveAction = (
    data: IFormValues,
    actionType: IActionType | undefined,
  ) => {
    if (actionType) {
      dispatch(userActions({ data, actionType }))
        .unwrap()
        .then(() => {
          dispatch(getUsersData());
        });
    }
  };

  const updateAlerts = () => {
    dispatch(hideAlert());
  };

  return (
    <>
      <TableWithActions
        rowData={userLists}
        columnDefs={USER_TABLE_COL}
        rowHeight={35}
        formMetadata={USER_CREATE_INPUT_FORM}
        handleFormSaveAction={handleFormSaveAction}
        alert={{ ...alert, updateAlerts } as ICustomToast}
      />
      {isLoading && <AppSpinner />}
    </>
  );
};

export default memo(ManageUsers);
