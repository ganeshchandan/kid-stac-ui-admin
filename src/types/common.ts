import { ColDef } from 'ag-grid-community';
import { AgReactUiProps } from 'ag-grid-react';
import { FormEvent } from 'react';
import { ICustomAlert } from 'types';

export interface IRowData {
  [key: string]: string | boolean | number | null;
}

export interface ITableWithActions {
  rowData: IRowData[];
  columnDefs: ColDef<IRowData>[];
  rowHeight: number;
  formMetadata: IFormData[];
  handleFormSaveAction: (
    args: IFormValues,
    actionType: IActionType | undefined,
  ) => void;
  alert: ICustomToast;
}

export interface IReactAGTable extends AgReactUiProps {
  rowData: IRowData[];
  columnDefs: ColDef<IRowData>[];
  rowHeight: number;
}

export interface IFormData {
  id: string;
  label: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  feedbackText?: string;
  options ? : {id:number, name : string}[]
}

export interface IFormValues {
  [key: string]: string | number | string[] | undefined;
}

export interface IFormButtonProps {
  cancel: {
    text: string;
    onClick?: () => void;
  };
  proceed: {
    text: string;
  };
}

export interface ICustomForm {
  formData: IFormData[];
  onSubmit: (event: FormEvent<HTMLFormElement>, args: IFormValues) => void;
  formValues: IFormValues;
  buttonProps?: IFormButtonProps;
}

export type IActionType = 'delete' | 'update' | 'create' | 'none';

export interface IEditCreateModalData {
  show: boolean;
  actionType: IActionType;
  formValues: IFormValues;
}

export interface IConfiramationBox {
  type?: 'wraning' | 'success' | 'failed';
  title: string;
  message: string;
  show: boolean;
  handleClose: () => void;
  handleProceed: (event: any) => void;
  buttonProps: {
    primaryButton: { label: string };
    secondaryButton: { label: string };
  };
}

export interface ICustomToast extends ICustomAlert {
  updateAlerts: () => void;
}
