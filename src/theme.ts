export interface Theme {
  theme: Config;
}

export interface Config {
  inputBorder: string;
  error: string;
  buttonBackground: string;
  buttonText: string;
}

export default {
  inputBorder: '#bbbbbb',
  error: '#bf1a2a',
  buttonBackground: '#69a771',
  buttonText: '#ffffff',
};
