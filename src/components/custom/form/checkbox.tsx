import { Form } from 'react-bootstrap';
import { FormCheckType } from 'react-bootstrap/esm/FormCheck';
import { IFormData, IFormValues } from 'types';

const FormCheckbox = ({
  data,
  handleChange,
  values,
}: {
  data: IFormData;
  handleChange: (...args: any) => void;
  values: IFormValues;
}) => {
  const { id, label, placeholder, type, required } = data;
  return (
    <Form.Group key={id}>
      <Form.Check
        id={id}
        data-forminputid={id}
        type={type as FormCheckType}
        placeholder={placeholder}
        required={required}
        value={values[id] || ''}
        onChange={handleChange}
        label={label}
      />
    </Form.Group>
  );
};

export default FormCheckbox;
