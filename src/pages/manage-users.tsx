import ManageUsers from '../components/manage-users';
import Panel from '../components/panel';
const PanelManageUsers = Panel(ManageUsers);

const ManageUsersPage = () => {
  return <PanelManageUsers />;
};

export default ManageUsersPage;
