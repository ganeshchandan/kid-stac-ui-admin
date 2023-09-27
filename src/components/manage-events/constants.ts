import { ColDef } from 'ag-grid-community';
import { IFormData, IRowData } from 'types';

export const EVENTS_CREATE_INPUT_FORM: IFormData[] = [
  {
    id: 'name',
    label: 'Event Name',
    type: 'text',
    placeholder: 'Enter your event name',
    required: true,
    feedbackText: 'Please enter event name',
  },
  {
    id: 'start_date',
    label: 'Start date',
    type: 'date',
    placeholder: 'Enter start date',
    required: true,
    feedbackText: 'Please enter start date',
  },
  {
    id: 'end_date',
    label: 'End Date',
    type: 'date',
    placeholder: 'Enter end date',
    required: true,
    feedbackText: 'Please enter end date',
  },
  {
    id: 'is_online',
    label: 'Is Online',
    type: 'checkbox',
  },
  {
    id: 'event_fee',
    label: 'Fees',
    type: 'number',
    placeholder: 'Enter Fees',
    required: true,
    feedbackText: 'Please enter Fees',
  },
  {
    id: 'capacity',
    label: 'Capacity',
    type: 'number',
    placeholder: 'Enter capacity',
    required: true,
    feedbackText: 'Please enter capacity',
  },
  {
    id: 'category_id',
    label: 'Category',
    type: 'select',
    placeholder: 'Select category',
    required: true,
    feedbackText: 'Please select category',
    options : []
  },
  {
    id: 'vendor_id',
    label: 'Vendor',
    type: 'select',
    placeholder: 'Select vendot',
    required: true,
    feedbackText: 'Please select vendot',
    options : []
  },
  {
    id: 'description',
    label: 'Description',
    type: 'textarea',
    placeholder: 'Enter vendor description',
  },
];

export const EVENTS_TABLE_COL: ColDef<IRowData>[] = [
  {
    field: 'id',
    headerName: 'Event ID',
  },
  {
    field: 'name',
    headerName: 'Event Name',
  },
  {
    field: 'description',
    headerName: 'Description',
  },
  {
    field: 'start_date',
    headerName: 'Start Date',
  },
  {
    field: 'created_at',
    headerName: 'Created At',
  },
  {
    field: 'last_updated_at',
    headerName: 'Updated At',
  },
  {
    field: 'deleted_at',
    headerName: 'Deleted At',
  },
  {
    field: 'is_online',
    headerName: 'Is Online',
  },
  {
    field: 'event_fee',
    headerName: 'Fee',
  },
  {
    field: 'capacity', // Need to check
    headerName: 'Capacity',
  },
];
