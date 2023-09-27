const hostURL = 'http://localhost:4000';

export const ACTION_METHOD_MAP: { [key: string]: string } = {
  create: 'POST',
  update: 'PATCH',
  delete: 'DELETE',
};

// Users
export const GET_USERS_URL = `${hostURL}/user/getUsers`;
export const INSERT_USER_URL = `${hostURL}/user/insertUser`;
export const UDPATE_USER_URL = `${hostURL}/user/updateUser`;
export const DELETE_USER_URL = `${hostURL}/user/deleteUSer`;

export const USER_ACTIONS_URL: { [key: string]: string } = {
  create: INSERT_USER_URL,
  update: UDPATE_USER_URL,
  delete: DELETE_USER_URL,
};

// vendors
export const GET_VENDORS_URL = `${hostURL}/vendors/getVendors`;
export const INSERT_VENDOR_URL = `${hostURL}/vendors/insertVendor`;
export const UDPATE_VENDOR_URL = `${hostURL}/vendors/updateVendor`;
export const DELETE_VENDOR_URL = `${hostURL}/vendors/deleteVendor`;

export const VENDOR_ACTIONS_URL: { [key: string]: string } = {
  create: INSERT_VENDOR_URL,
  update: UDPATE_VENDOR_URL,
  delete: DELETE_VENDOR_URL,
};

// Category
export const GET_CATEGORIES_URL = `${hostURL}/category/getAll`;
export const INSERT_CATEGORY_URL = `${hostURL}/category/insert`;
export const UDPATE_CATEGORY_URL = `${hostURL}/category/update`;
export const DELETE_CATEGORY_URL = `${hostURL}/category/delete`;

export const CATEGORIES_ACTIONS_URL: { [key: string]: string } = {
  create: INSERT_CATEGORY_URL,
  update: UDPATE_CATEGORY_URL,
  delete: DELETE_CATEGORY_URL,
};

// Events
export const GET_EVENTS_URL = `${hostURL}/events/getAll`;
export const INSERT_EVENT_URL = `${hostURL}/events/insert`;
export const UDPATE_EVENT_URL = `${hostURL}/events/update`;
export const DELETE_EVENT_URL = `${hostURL}/events/delete`;

export const EVENTS_ACTIONS_URL: { [key: string]: string } = {
  create: INSERT_EVENT_URL,
  update: UDPATE_EVENT_URL,
  delete: DELETE_EVENT_URL,
};
