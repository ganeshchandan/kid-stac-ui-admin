import { IRowData } from 'types';

export interface IUser extends IRowData {
  id: number;
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  is_registered: boolean;
  last_login_date: string;
}

export interface IVendor extends IRowData {
  id: number;
  name: string;
  description: string;
  phone: string;
  email: string;
  currency_id: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  last_login_date: string;
  location_id: number;
  email_footer: string;
  is_active: boolean;
  is_beta: boolean;
}

export interface ICategory extends IRowData {
  id: number;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  is_deleted: boolean;
}

export interface IEvent extends IRowData {
  id: number;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  is_deleted: boolean;
}
