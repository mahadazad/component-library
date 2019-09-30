import React, {useState, useCallback} from 'react';
import {ThemeProvider} from 'styled-components';

import LoginForm from './src/components/LoginForm';
import theme from './src/theme';

const App = () => {
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const onLogin = useCallback(() => {
    setUsernameError(!username.length ? 'Username is required.' : '');
    setPasswordError(!password.length ? 'Password is required.' : '');
  }, [username, password]);

  return (
    <ThemeProvider theme={theme}>
      <LoginForm
        username={username}
        usernameError={usernameError}
        onUsernameChange={setUsername}
        password={password}
        passwordError={passwordError}
        onPasswordChange={setPassword}
        onLogin={onLogin}
      />
    </ThemeProvider>
  );
};

export default App;
