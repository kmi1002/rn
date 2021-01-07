import React, { Fragment, useState } from 'react';
import TermsButton from '@molecules/TermsButton';
import * as S from './style';
import { useTranslation } from 'react-i18next';

const TermsScreen = () => {
  const { t } = useTranslation();

  const [isTerms, setTerms] = useState(true);

  const onTerms = () => {
    setTerms(true);
  };

  const onPrivacy = () => {
    setTerms(false);
  };

  return (
    <S.Wrapper>
      <S.Header>
        <S.Tabs>
          <TermsButton label={t('termsScreen.tabs.terms')} selected={isTerms} onPress={onTerms} />
          <TermsButton label={t('termsScreen.tabs.privacy')} selected={!isTerms} onPress={onPrivacy} />
        </S.Tabs>
      </S.Header>
      <S.Body>
        <S.ScrollView>
          {isTerms ? (
            <Fragment>
              <S.Date>{t('termsScreen.terms.date')}</S.Date>
              <S.Description>{t('termsScreen.terms.description')}</S.Description>
            </Fragment>
          ) : (
            <Fragment>
              <S.Description>{t('termsScreen.privacy.description')}</S.Description>
            </Fragment>
          )}
        </S.ScrollView>
      </S.Body>
    </S.Wrapper>
  );
};

export default TermsScreen;
