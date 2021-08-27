import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import PasswordResetRequest from './PasswordResetReqeust';

const LoginControl = () => {
  const [isUser, setIsUser] = useState(false);
  const [displayReset, setDisplayReset] = useState(false);

  const buttonText = isUser
    ? "Don't have an account?"
    : 'Already have an account?';

  const toggleIsUser = (): void => {
    setIsUser(!isUser);
  };

  const toggleDisplayReset = (): void => {
    setDisplayReset(!displayReset);
  };

  return (
    <div>
      {isUser ? <Login /> : <Signup />}
      <button onClick={toggleIsUser}>{buttonText}</button>
      <p onClick={toggleDisplayReset}>Forgot Password?</p>
      {displayReset ? <PasswordResetRequest /> : null}
    </div>
  );
};

export default LoginControl;
