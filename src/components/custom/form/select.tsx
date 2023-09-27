import { Form } from 'react-bootstrap';
import { IFormData, IFormValues } from 'types';
const INVALID_TYPE = 'invalid';

const FormSelect = ({
  data,
  handleChange,
  values,
}: {
  data: IFormData;
  handleChange: (...args: any) => void;
  values: IFormValues;
}) => {
  const { id, label, required, placeholder,feedbackText , options= []} = data;
  return (
    <Form.Group key={id}>
      <Form.Label>{`${label} :`}</Form.Label>
      <Form.Select
        id={id}
        data-forminputid={id}
        required={required}
        value={values[id] || ''}
        onChange={handleChange}
      >
        {
          options.map(({id , name}) => <option key ={id} value= {id}>{name}</option>)
        }
      </Form.Select>
      <Form.Control.Feedback type={INVALID_TYPE}>
        {feedbackText}
      </Form.Control.Feedback>
    </Form.Group>
  );
};

export default FormSelect;
