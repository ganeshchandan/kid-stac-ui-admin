import { GrEdit } from 'react-icons/gr';
import { RiDeleteBin5Line } from 'react-icons/ri';

const CellRenderedActions = (props: any) => {
  const handleEditClick = () => {
    props.context.methodFromParent(props.data, 'update');
  };
  const handleDeleteClick = () => {
    props.context.methodFromParent(props.data, 'delete');
  };

  return (
    <div className="cell-rendered-actions">
      <GrEdit className="edit-icon" onClick={handleEditClick} />
      <RiDeleteBin5Line className="delete-icon" onClick={handleDeleteClick} />
    </div>
  );
};

export default CellRenderedActions;
