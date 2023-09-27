import manageCategories from '../components/manage-categories';
import Panel from '../components/panel';
const PanelManageCategories = Panel(manageCategories);

const ManageCategoriesPage = () => {
  return <PanelManageCategories />;
};

export default ManageCategoriesPage;
