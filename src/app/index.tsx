import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/login';
import ManageUsersPage from '../pages/manage-users';
import { memo } from 'react';
import ManageVendorsPage from '../pages/manage-vendors';
import ManageCategoriesPage from '../pages/manage-categories';
import ManageEventsPage from '../pages/manage-events';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/manageUsers" element={<ManageUsersPage />}></Route>
        <Route path="/manageVendors" element={<ManageVendorsPage />}></Route>
        <Route
          path="/manageCategory"
          element={<ManageCategoriesPage />}
        ></Route>
        <Route path="/manageEvents" element={<ManageEventsPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default memo(App);
