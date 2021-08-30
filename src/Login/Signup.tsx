import FormWrapper from '../form/FormWrapper';
import { Field } from '../types/globalTypes';

const Signup = () => {
  return (
    <div>
      <h2>Sign up!</h2>
      <FormWrapper
        fields={[Field.Email, Field.Password, Field.FirstName, Field.LastName]}
        requiredFields={[Field.Email, Field.Password]}
      />
    </div>
  );
};

export default Signup;
