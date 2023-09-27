import manageEvents from '../components/manage-events';
import Panel from '../components/panel';
const PanelManageEvents = Panel(manageEvents);

const ManageEventsPage = () => {
  return <PanelManageEvents />;
};

export default ManageEventsPage;
