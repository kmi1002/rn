import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { loginRequest } from '@stores/auth';
import FacebokHelper from '@helpers/FacebookHelper';
import GoogleHelper from '@helpers/GoogleHelper';
import AppleHelper from '@helpers/AppleHelper';

import LoginScreenView from './LoginScreen.view';

const LoginScreenContainer = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onSignup = (provider: string, accessToken: string) => {
    dispatch(loginRequest(provider.toLowerCase(), accessToken));
  };

  const onEmail = () => {
    dispatch(loginRequest('email', '', 'admin@crocus.ai', 'Test123!@#'));
  };

  const onGoogle = async () => {
    const { provider, accessToken } = await GoogleHelper.onLogin();
    onSignup(provider, accessToken);
  };

  const onFacebook = async () => {
    const { provider, accessToken } = await FacebokHelper.onLogin();
    onSignup(provider, accessToken);
  };

  const onApple = async () => {
    const { provider, accessToken } = await AppleHelper.onLogin();
    onSignup(provider, accessToken);
  };

  useEffect(() => {
    AppleHelper.onCredentialRevoked();
  }, []);

  return <LoginScreenView onEmail={onEmail} />;
};

export default LoginScreenContainer;
