import React, { useEffect } from 'react';
// import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
// import SplashScreen from 'react-native-splash-screen';
import { AuthStack, MainStack } from '@navigations/';
// import { RootState } from '@/stores';
// import { AuthStateType, SignupStep } from '@stores/auth/type';

const AppStack = () => {
  const isLogin = false;
  // const { signupStep, authState } = useSelector((state: RootState) => state.auth);
  //
  // const isLogin = () => {
  //   return signupStep === SignupStep.DONE && authState === AuthStateType.LOGGED_IN;
  // };
  //
  // useEffect(() => {
  //   setTimeout(() => {
  //     SplashScreen.hide();
  //   }, 1000);
  // }, []);

  return <NavigationContainer>{isLogin ? <MainStack /> : <AuthStack />}</NavigationContainer>;
};

export default AppStack;
