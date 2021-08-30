import FormWrapper from '../form/FormWrapper';
import { Field } from '../types/globalTypes';

const PasswordResetRequest = () => {
  return (
    <div>
      <h2>Reset Password?</h2>
      <FormWrapper fields={[Field.Email]} requiredFields={[Field.Email]} />
    </div>
  );
};

export default PasswordResetRequest;
