import { Modal, Button } from 'react-bootstrap';
import { IConfiramationBox } from 'types';
import { PRIMARY_VARIANT, SECONDARY_VARIANT, SIZE_SM } from '../../constants';
import { AiOutlineWarning } from 'react-icons/ai';
const ConfiramationBox = ({
  type,
  show,
  handleClose,
  handleProceed,
  message,
  buttonProps,
}: IConfiramationBox) => {
  const { secondaryButton, primaryButton } = buttonProps;
  const { label: primaryButtonLabel } = primaryButton;
  const { label: secondayButtonLabel } = secondaryButton;

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Body>
        <div className={`confiramation-box-body ${type}`}>
          <AiOutlineWarning size={28} />
          {message}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant={SECONDARY_VARIANT}
          onClick={handleClose}
          size={SIZE_SM}
        >
          {secondayButtonLabel}
        </Button>
        <Button
          variant={PRIMARY_VARIANT}
          onClick={handleProceed}
          size={SIZE_SM}
        >
          {primaryButtonLabel}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfiramationBox;
