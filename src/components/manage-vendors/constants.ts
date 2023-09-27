import { ColDef } from 'ag-grid-community';
import { IFormData, IRowData } from 'types';

export const VENDOR_CREATE_INPUT_FORM: IFormData[] = [
  {
    id: 'name',
    label: 'Vendor Name',
    type: 'text',
    placeholder: 'Enter your vendor name',
    required: true,
    feedbackText: 'Please enter vendor name',
  },
  {
    id: 'email',
    label: 'Email Address',
    type: 'email',
    placeholder: 'Enter vendor email',
    required: true,
    feedbackText: 'Please enter vendor email',
  },
  {
    id: 'currency_id',
    label: 'Currency',
    type: 'text',
    placeholder: 'Enter Currency',
    required: true,
    feedbackText: 'Please Currency',
  },
  {
    id: 'location_id',
    label: 'Location',
    type: 'text',
    placeholder: 'Enter vendor location',
    required: true,
    feedbackText: 'Please enter location',
  },
  {
    id: 'email_footer',
    label: 'Email Footer',
    type: 'text',
    placeholder: 'Enter vendor Email Footer',
    required: true,
    feedbackText: 'Please enter Email Footer',
  },
  {
    id: 'description',
    label: 'Description',
    type: 'textarea',
    placeholder: 'Enter vendor description',
  },
];

export const VENDOR_TABLE_COL: ColDef<IRowData>[] = [
  {
    field: 'id',
    headerName: 'Vendor ID',
  },
  {
    field: 'name',
    headerName: 'Vendor Name',
  },
  {
    field: 'email',
    headerName: 'Vendor Email',
  },
  {
    field: 'description',
    headerName: 'Description',
  },
  {
    field: 'currency_id',
    headerName: 'Currency Id',
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
    field: 'last_login_date',
    headerName: 'Last Login date',
  },
  {
    field: 'location_id',
    headerName: 'Location',
  },
  {
    field: 'email_footer', // Need to check
    headerName: 'Email Footer',
  },
  {
    field: 'is_active',
    headerName: 'Is Active',
  },
  {
    field: 'is_beta', // Need to check
    headerName: 'Is Beta',
  },
];
