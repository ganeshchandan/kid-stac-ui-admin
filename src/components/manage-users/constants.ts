import { ColDef } from 'ag-grid-community';
import { IFormData, IRowData } from 'types';

export const USER_CREATE_INPUT_FORM: IFormData[] = [
  {
    id: 'first_name',
    label: 'First Name',
    type: 'text',
    placeholder: 'Enter your first name',
    required: true,
    feedbackText: 'Please enter your first name',
  },
  {
    id: 'last_name',
    label: 'Last Name',
    type: 'text',
    placeholder: 'Enter your last name',
    required: true,
    feedbackText: 'Please enter your last name',
  },
  {
    id: 'email',
    label: 'Email Address',
    type: 'email',
    placeholder: 'Enter your email name',
    required: true,
    feedbackText: 'Please enter your email name',
  },
  {
    id: 'phone',
    label: 'Phone no',
    type: 'phone',
    placeholder: 'Enter your phone name',
    required: true,
    feedbackText: 'Please enter your phone name',
  },
];

export const USER_TABLE_COL: ColDef<IRowData>[] = [
  {
    field: 'id',
    headerName: 'User ID',
  },
  {
    field: 'first_name',
    headerName: 'First Name',
  },
  {
    field: 'last_name',
    headerName: 'Last Name',
  },
  {
    field: 'phone',
    headerName: 'Phone',
  },
  {
    field: 'email',
    headerName: 'Email',
  },
  {
    field: 'created_at',
    headerName: 'Created At',
  },
  {
    field: 'updated_at',
    headerName: 'Updated At',
  },
  {
    field: 'deleted_at',
    headerName: 'Deleted At',
  },
  {
    field: 'is_registered',
    headerName: 'Is Registered',
  },
  {
    field: 'last_login_date',
    headerName: 'Last login date',
  },
];
