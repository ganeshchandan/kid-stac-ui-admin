export * from './users';
export * from './common';

export interface ICustomAlert {
  show: boolean;
  title?: string;
  type?: 'success' | 'warning' | 'danger';
  message?: string;
}
