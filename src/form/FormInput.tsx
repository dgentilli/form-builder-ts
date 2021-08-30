import React, { ChangeEvent } from 'react';

interface Props {
  field: string;
  required: boolean;
  changeHandler: (
    key: string
  ) => (event: ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<Props> = ({ field, changeHandler, required }) => {
  let fieldType =
    field === 'password' ? 'password' : field === 'email' ? 'email' : 'text';
  return (
    <div className='form-input-wrapper'>
      <div className='form-input-inner'>
        <label>{field}</label>
        <input
          name={field}
          type={fieldType}
          placeholder={field}
          required={required}
          onChange={changeHandler(field)}
        />
      </div>
    </div>
  );
};

export default FormInput;
