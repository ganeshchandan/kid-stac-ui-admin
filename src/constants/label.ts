export const CREATE_UPDATE_MODAL_DETAILS: {
  [key: string]: {
    title: string;
    messgae: string;
    primaryButton: string;
    secondaryButton: string;
  };
} = {
  create: {
    title: 'Create User',
    messgae: '',
    primaryButton: 'Create',
    secondaryButton: 'Cancel',
  },
  update: {
    title: 'Update User',
    messgae: '',
    primaryButton: 'Update',
    secondaryButton: 'Cancel',
  },
  delete: {
    title: 'Delete User',
    messgae: 'Do you want to delete the user?',
    primaryButton: 'Delete',
    secondaryButton: 'Cancel',
  },
};
