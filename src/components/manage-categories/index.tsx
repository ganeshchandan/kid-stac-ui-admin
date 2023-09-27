import { memo, useEffect } from 'react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import TableWithActions from '../custom/table-with-actions';
import { CATEGORIES_TABLE_COL, CATEGORY_CREATE_INPUT_FORM } from './constants';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import AppSpinner from '../custom/spinner';
import { IActionType, ICustomToast, IFormValues } from '../../types/common';
import { hideAlert } from '../../reducers/user-slice';
import {
  categoriesActions,
  getCategoriesData,
} from '../../actions/category.action';

const ManageCategories = () => {
  const dispatch = useDispatch<AppDispatch>();
  const categories = useSelector((state: RootState) => state.categories);
  const { categoriesLists, isLoading, alert } = categories;

  useEffect(() => {
    dispatch(getCategoriesData());
  }, []);

  const handleFormSaveAction = (
    data: IFormValues,
    actionType: IActionType | undefined,
  ) => {
    if (actionType) {
      dispatch(categoriesActions({ data, actionType }))
        .unwrap()
        .then(() => {
          dispatch(getCategoriesData());
        });
    }
  };

  const updateAlerts = () => {
    dispatch(hideAlert());
  };

  return (
    <>
      <TableWithActions
        rowData={categoriesLists}
        columnDefs={CATEGORIES_TABLE_COL}
        rowHeight={35}
        formMetadata={CATEGORY_CREATE_INPUT_FORM}
        handleFormSaveAction={handleFormSaveAction}
        alert={{ ...alert, updateAlerts } as ICustomToast}
      />
      {isLoading && <AppSpinner />}
    </>
  );
};

export default memo(ManageCategories);
