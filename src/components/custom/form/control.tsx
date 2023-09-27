import { Form } from 'react-bootstrap';
import { IFormData, IFormValues } from 'types';
const INVALID_TYPE = 'invalid';

const FormControl = ({
  data,
  handleChange,
  values,
}: {
  data: IFormData;
  handleChange: (...args: any) => void;
  values: IFormValues;
}) => {
  const { id, label, placeholder, type, required, feedbackText } = data;
  return (
    <Form.Group key={id}>
      <Form.Label>{`${label} :`}</Form.Label>
      <Form.Control
        id={id}
        data-forminputid={id}
        type={type}
        placeholder={placeholder}
        required={required}
        value={values[id] || ''}
        onChange={handleChange}
      />
      <Form.Control.Feedback type={INVALID_TYPE}>
        {feedbackText}
      </Form.Control.Feedback>
    </Form.Group>
  );
};

export default FormControl;
