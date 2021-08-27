import React, { ChangeEvent } from 'react';

interface Props {
  field: string;
  changeHandler: (
    key: string
  ) => (event: ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<Props> = ({ field, changeHandler }) => {
  return (
    <div>
      <div>
        <label>{field}</label>
        <input placeholder={field} onChange={changeHandler(field)} />
      </div>
    </div>
  );
};

export default FormInput;
