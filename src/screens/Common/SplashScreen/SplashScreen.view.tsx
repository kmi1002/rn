import React from 'react';
import * as S from './SplashScreen.style';
import { useTranslation } from 'react-i18next';

const SplashScreenView = () => {
  const { t } = useTranslation();

  return (
    <S.Wrapper>
      <S.Title>{t('splahScreen.title')}</S.Title>
    </S.Wrapper>
  );
};

export default SplashScreenView;
