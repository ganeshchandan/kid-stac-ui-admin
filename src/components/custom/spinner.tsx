import Spinner from 'react-bootstrap/Spinner';
import { PRIMARY_VARIANT } from '../../constants';

const AppSpinner = () => (
  <div className="app-spinner">
    <Spinner animation="border" role="status" variant={PRIMARY_VARIANT}>
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  </div>
);

export default AppSpinner;
