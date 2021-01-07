import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from '@navigations/AuthStack';
import MainStack from '@navigations/MainStack';
import { RootState } from '@stores/index';
import { AuthStateType, SignupStep } from '@stores/auth/type';
import SplashScreen from 'react-native-splash-screen';

const AppStack = () => {
  const { signupStep, authState } = useSelector((state: RootState) => state.auth);

  const isLogin = () => {
    return signupStep === SignupStep.DONE && authState === AuthStateType.LOGGED_IN;
  };

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>{isLogin() ? <MainStack /> : <AuthStack />}</NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppStack;
