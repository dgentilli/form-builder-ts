import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';

const LoginControl = () => {
  const [isUser, setIsUser] = useState(false);

  if (isUser) {
    return <Login />;
  } else {
    return <Signup />;
  }
};

export default LoginControl;
