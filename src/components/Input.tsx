import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';

import {Theme} from '../theme';

interface Props {
  label: string;
  value: string | number;
  onChange: (text: string) => void;
  error?: string;
  style?: any;
  secure?: boolean;
}

const Input = ({
  label,
  value = '',
  onChange,
  error = '',
  secure = false,
  style,
}: Props) => (
  <View style={style}>
    <Label>{label}</Label>
    <TextInput
      value={String(value)}
      onChangeText={onChange}
      secureTextEntry={secure}
    />
    {!!error && <Error>{error}</Error>}
  </View>
);

const Label = styled.Text`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 6px;
`;

const Error = styled.Text<Theme>`
  font-size: 13px;
  color: ${props => props.theme.error};
  margin-top: 4px;
`;

const TextInput = styled.TextInput<Theme>`
  border: 1px solid ${props => props.theme.inputBorder};
  padding: 10px 8px;
`;

export default Input;
