import React, { ChangeEvent, useState, useEffect } from 'react';
import FormInput from './FormInput';
import { BasicFormProps } from '../types/globalTypes';
import { validateFormInput } from '../validations/validations';

interface FormData {
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
}

export interface Errors {
  isValid?: boolean;
  messages?: string[];
}

const FormWrapper: React.FC<BasicFormProps> = ({ fields, validations }) => {
  const [data, setData] = useState<FormData>({});
  const [errors, setErrors] = useState<Errors | null>(null);

  const handleInputChange =
    (key: string) => (event: ChangeEvent<HTMLInputElement>) => {
      if (event) {
        const value = event.target.value;
        setData({ ...data, [key]: value });
      }
    };

  const submitForm = async (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    if (Object.keys(data).length === 0) {
      alert('Please fill in required fields.');
      return;
    }

    if (errors && errors.isValid === true) {
      alert('Success! Form was submitted');
    } else {
      alert(
        `Form submission failed: ${
          errors
            ? errors.messages?.map((message) => ` ${message}`)
            : 'There was a problem.'
        } `
      );
    }
  };

  useEffect(() => {
    setErrors(validateFormInput(data));
  }, [data]);

  return (
    <div>
      <h3>Form Wrapper</h3>
      {fields.map((item) => (
        <FormInput key={item} field={item} changeHandler={handleInputChange} />
      ))}
      <button onClick={submitForm}>Submit</button>
    </div>
  );
};

export default FormWrapper;
