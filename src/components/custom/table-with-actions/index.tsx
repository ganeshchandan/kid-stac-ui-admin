import {
  IActionType,
  IEditCreateModalData,
  IRowData,
  IFormValues,
  ITableWithActions,
} from 'types';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import ReactAGTable from '../react-table';
import { useEffect, useState } from 'react';
import { ColDef } from 'ag-grid-community';
import CellRenderedActions from './cell-rendered-actions';
import CustomForm from '../form';
import CustomDialog from '../dialog';
import { Button } from 'react-bootstrap';
import {
  OUTLINE_PRIMARY_VARIANT,
  SIZE_SM,
  CREATE_TYPE,
  DELETE_TYPE,
  WARNING_TYPE,
} from '../../../constants';
import ConfiramationBox from '../confirmation-box';
import { CREATE_UPDATE_MODAL_DETAILS } from '../../../constants/label';
import { DEFAULT_ACTION_MODAL } from '../../../constants/default_value';
import CustomToast from '../toast';

const TableWithActions = ({
  rowData,
  columnDefs,
  rowHeight,
  formMetadata,
  handleFormSaveAction,
  alert,
}: ITableWithActions) => {
  const [tableColumns, setTableColumns] = useState<ColDef<IRowData>[]>([]);
  const [editCreateModalData, setEditCreateModalData] =
    useState<IEditCreateModalData>(DEFAULT_ACTION_MODAL);
  const { show: alertShow } = alert;
  const { show, actionType, formValues } = editCreateModalData;
  const {
    messgae = '',
    title = '',
    primaryButton = '',
    secondaryButton = '',
  } = CREATE_UPDATE_MODAL_DETAILS[actionType] || {};

  useEffect(() => {
    setTableColumns([
      ...columnDefs,
      {
        headerName: '',
        cellRenderer: CellRenderedActions,
        width: 100,
        pinned: 'right',
      },
    ]);
  }, [columnDefs]);

  const handleClose = () => {
    setEditCreateModalData(DEFAULT_ACTION_MODAL);
  };

  const handleCreateNew = () => {
    setEditCreateModalData({
      show: true,
      formValues: {},
      actionType: CREATE_TYPE,
    });
  };

  const methodFromParent = (
    formValues: IFormValues,
    actionType: IActionType,
  ) => {
    setEditCreateModalData({ show: true, formValues, actionType });
  };

  const handleSubmit = (event: any, selectedValues?: IFormValues) => {
    event.preventDefault();
    handleFormSaveAction(selectedValues || formValues, actionType);
    handleClose();
  };

  return (
    <div className="table-with-actions">
      <div className="manage-actions">
        <Button
          variant={OUTLINE_PRIMARY_VARIANT}
          size={SIZE_SM}
          onClick={handleCreateNew}
        >
          Create
        </Button>
      </div>
      <ReactAGTable
        rowData={rowData}
        columnDefs={tableColumns}
        rowHeight={rowHeight}
        context={{
          methodFromParent,
        }}
      />
      {actionType === DELETE_TYPE ? (
        <ConfiramationBox
          type={WARNING_TYPE}
          title={title}
          message={messgae}
          show={show}
          handleClose={handleClose}
          handleProceed={handleSubmit}
          buttonProps={{
            primaryButton: { label: primaryButton },
            secondaryButton: { label: secondaryButton },
          }}
        />
      ) : (
        <CustomDialog show={show} title={title} closeButton={true}>
          <CustomForm
            formData={formMetadata}
            onSubmit={handleSubmit}
            formValues={formValues}
            buttonProps={{
              cancel: {
                text: secondaryButton,
                onClick: handleClose,
              },
              proceed: {
                text: primaryButton,
              },
            }}
          />
        </CustomDialog>
      )}
      {alertShow && <CustomToast {...alert} />}
    </div>
  );
};

export default TableWithActions;
