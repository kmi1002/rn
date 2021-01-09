import React from 'react';
import { useTranslation } from 'react-i18next';
import * as S from './LoginScreen.style';
import { LoginScreenViewProps } from './LoginScreen.type';

const LoginScreenView = ({ onEmail }: LoginScreenViewProps) => {
  const { t } = useTranslation();

  return (
    <S.Wrapper>
      <S.Title>title</S.Title>
      <S.Button title="Login" onPress={onEmail} />
    </S.Wrapper>
  );
};

export default LoginScreenView;
