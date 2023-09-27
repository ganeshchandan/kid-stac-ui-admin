import { Toast, ToastContainer } from 'react-bootstrap';
import { ICustomToast } from 'types';

const CustomToast = ({ type, message, updateAlerts }: ICustomToast) => {
  const onClose = () => {
    updateAlerts();
  };

  return (
    <ToastContainer className="p-3" position={'top-end'} style={{ zIndex: 1 }}>
      <Toast
        autohide={true}
        onClose={onClose}
        className="d-inline-block m-1"
        delay={1000}
        bg={type}
      >
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default CustomToast;
