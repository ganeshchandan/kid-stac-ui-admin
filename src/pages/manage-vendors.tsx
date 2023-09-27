import manageVendors from '../components/manage-vendors';
import Panel from '../components/panel';
const PanelManageVendors = Panel(manageVendors);

const ManageVendorsPage = () => {
  return <PanelManageVendors />;
};

export default ManageVendorsPage;
