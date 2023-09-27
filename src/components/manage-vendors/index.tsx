import { memo, useEffect } from 'react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import TableWithActions from '../custom/table-with-actions';
import { VENDOR_CREATE_INPUT_FORM, VENDOR_TABLE_COL } from './constants';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import AppSpinner from '../custom/spinner';
import { IActionType, ICustomToast, IFormValues } from '../../types/common';
import { hideAlert } from '../../reducers/user-slice';
import { getVendorsData, vendorsActions } from '../../actions/vendors.actions';

const ManageVendors = () => {
  const dispatch = useDispatch<AppDispatch>();
  const vendors = useSelector((state: RootState) => state.vendors);
  const { vendorsLists, isLoading, alert } = vendors;

  useEffect(() => {
    console.log('ganesh here');
    dispatch(getVendorsData());
  }, []);

  const handleFormSaveAction = (
    data: IFormValues,
    actionType: IActionType | undefined,
  ) => {
    if (actionType) {
      dispatch(vendorsActions({ data, actionType }))
        .unwrap()
        .then(() => {
          dispatch(getVendorsData());
        });
    }
  };

  const updateAlerts = () => {
    dispatch(hideAlert());
  };

  return (
    <>
      <TableWithActions
        rowData={vendorsLists}
        columnDefs={VENDOR_TABLE_COL}
        rowHeight={35}
        formMetadata={VENDOR_CREATE_INPUT_FORM}
        handleFormSaveAction={handleFormSaveAction}
        alert={{ ...alert, updateAlerts } as ICustomToast}
      />
      {isLoading && <AppSpinner />}
    </>
  );
};

export default memo(ManageVendors);
