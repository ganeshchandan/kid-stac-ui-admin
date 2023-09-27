import { ColDef } from 'ag-grid-community';
import { IFormData, IRowData } from 'types';

export const CATEGORY_CREATE_INPUT_FORM: IFormData[] = [
  {
    id: 'name',
    label: 'Category Name',
    type: 'text',
    placeholder: 'Enter your category name',
    required: true,
    feedbackText: 'Please enter category name',
  },
  {
    id: 'description',
    label: 'Description',
    type: 'textarea',
    placeholder: 'Enter vendor description',
  },
];

export const CATEGORIES_TABLE_COL: ColDef<IRowData>[] = [
  {
    field: 'id',
    headerName: 'Category ID',
  },
  {
    field: 'name',
    headerName: 'Category Name',
  },
  {
    field: 'description',
    headerName: 'Description',
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
    field: 'is_deleted',
    headerName: 'Is Deleted',
  },
];
