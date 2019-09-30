import React from 'react';
import {GestureResponderEvent} from 'react-native';
import styled from 'styled-components/native';

import {Theme} from '../theme';

interface Props {
  label?: string;
  children?: React.ReactNode;
  onPress: (e: GestureResponderEvent) => void;
}

const Button = ({children, label, onPress}: Props) => (
  <Container onPress={onPress}>{children || <Text>{label}</Text>}</Container>
);

const Container = styled.TouchableOpacity<Theme>`
  justify-content: center;
  align-items: center;
  padding: 10px 5px;
  background: ${props => props.theme.buttonBackground};
`;

const Text = styled.Text<Theme>`
  color: ${props => props.theme.buttonText};
`;

export default Button;
