import { ComponentType, ReactNode } from 'react';
import Modal from 'react-bootstrap/Modal';

interface ICustomDialog {
  show: boolean;
  closeButton?: boolean;
  title?: string;
  ModalHeader?: ComponentType;
  children: ReactNode;
  footerProps?: {
    className?: string;
    buttons?: { name: string; variant: string; onClick: () => void }[];
  };
}
const CustomDialog = ({
  show,
  closeButton,
  title,
  ModalHeader,
  children,
}: ICustomDialog) => {
  return (
    <Modal show={show}>
      <Modal.Header closeButton={closeButton}>
        {ModalHeader ? <ModalHeader /> : title}
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      {/* <Modal.Footer>
        {buttons.map(({ name, variant, onClick }) => (
          <Button variant={variant} key={name} onClick={onClick}>
            {name}
          </Button>
        ))}
      </Modal.Footer> */}
    </Modal>
  );
};

export default CustomDialog;
