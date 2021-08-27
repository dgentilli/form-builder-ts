import React from 'react';
import FormWrapper from '../form/FormWrapper';
import { Field } from '../types/globalTypes';
import PasswordResetRequest from './PasswordResetReqeust';

const Login = () => {
  return (
    <div>
      <h2>Login</h2>
      <FormWrapper
        fields={[Field.Email, Field.Password]}
        requiredFields={[Field.Email, Field.Password]}
      />
    </div>
  );
};

export default Login;
