import React from 'react';
import * as S from './ErrorScreen.style';
import { useTranslation } from 'react-i18next';

const ErrorScreenView = () => {
  const { t } = useTranslation();

  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>{t('errorScreen.title')}</S.Title>
        <S.Description>{t('errorScreen.description')}</S.Description>
      </S.Container>
    </S.Wrapper>
  );
};

export default ErrorScreenView;
