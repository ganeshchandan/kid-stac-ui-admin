import { FormEvent, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { ICustomForm, IFormButtonProps, IFormData, IFormValues } from 'types';
import {
  PRIMARY_VARIANT,
  SECONDARY_VARIANT,
  SIZE_SM,
} from '../../../constants';
import FormControl from './control';
import FormCheckbox from './checkbox';
import FormSelect from './select';

const CHECKBOX_TYPE = 'checkbox';

const DEFAULT_BUTTON: IFormButtonProps = {
  cancel: {
    text: 'Cancel',
  },
  proceed: {
    text: 'Save',
  },
};

const COMPONENT_MAPPER: {
  [key: string]: React.FC<{
    data: IFormData;
    handleChange: (...args: any) => void;
    values: IFormValues;
  }>;
} = {
  checkbox: FormCheckbox,
  select : FormSelect
};

export const typeAndValueMapper : {[key:string] : (target : any) => any} = {
  checkbox : (target) => {
    const {checked} = target;
    return checked;
  },
  number : (target) => {
    const {value} = target;
    return +value;
  }
};

const CustomForm = ({
  formData,
  onSubmit,
  formValues,
  buttonProps = DEFAULT_BUTTON,
}: ICustomForm) => {
  const [validated, setValidated] = useState(false);
  const [values, setValues] = useState<IFormValues>({});
  const { cancel, proceed } = buttonProps;
  const { text: cancelButtonLabel, ...cancelButtonProps } = cancel;
  const { text: proceedButtonLabel, ...proceedButtonProps } = proceed;

  useEffect(() => {
    setValues({ ...formValues });
  }, [formValues]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    debugger;
    if (form.checkValidity()) {
      onSubmit(event, values);
    }
    setValidated(true);
  };

  const handleChange = (event: any) => {
    const target = event.target;
    const forminputid = target.dataset.forminputid;
    const {value, type} = target;
    setValues((state) => ({ ...state, [forminputid]: typeAndValueMapper[type]?.(target) || value }));
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      {formData.map((data) => {
        const { id, type } = data;
        const FormComponent = COMPONENT_MAPPER[type] || FormControl;
        return (
          <FormComponent
            data={data}
            values={values}
            handleChange={handleChange}
            key={id}
          />
        );
      })}
      <div className="form-buttons">
        <Button
          variant={SECONDARY_VARIANT}
          {...cancelButtonProps}
          size={SIZE_SM}
        >
          {cancelButtonLabel}
        </Button>
        <Button
          type="submit"
          variant={PRIMARY_VARIANT}
          {...proceedButtonProps}
          size={SIZE_SM}
        >
          {proceedButtonLabel}
        </Button>
      </div>
    </Form>
  );
};

export default CustomForm;
