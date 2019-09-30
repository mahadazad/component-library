import React, {useRef, useEffect} from 'react';
import {Animated, SafeAreaView} from 'react-native';
import styled from 'styled-components/native';

import InputBase from './Input';
import Button from './Button';

interface Props {
  username: string;
  password: string;
  onUsernameChange: (username: string) => void;
  onPasswordChange: (password: string) => void;
  onLogin: () => void;
  usernameError?: string;
  passwordError?: string;
}

const LoginForm = ({
  username,
  password,
  onUsernameChange,
  onPasswordChange,
  onLogin,
  usernameError,
  passwordError,
}: Props) => {
  const opacity = useRef(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(opacity.current, {
      toValue: 1,
      duration: 800,
    }).start();
  }, []);

  return (
    <SafeAreaView>
      <Container style={{opacity: opacity.current}}>
        <Input
          label="Username"
          value={username}
          error={usernameError}
          onChange={onUsernameChange}
        />
        <Input
          label="Password"
          value={password}
          error={passwordError}
          onChange={onPasswordChange}
          secure
        />
        <Button label="Login" onPress={onLogin} />
      </Container>
    </SafeAreaView>
  );
};

const Container = styled(Animated.View)`
  padding: 20px;
`;

const Input = styled(InputBase)`
  margin-bottom: 15px;
`;

export default LoginForm;
