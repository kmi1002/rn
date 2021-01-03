import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from '@navigations/AuthStack';
import MainStack from '@navigations/MainStack';

const AppStack = () => {
  const isLogin = true;

  return (
    <SafeAreaProvider>
      <NavigationContainer>{isLogin ? <MainStack /> : <AuthStack />}</NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppStack;
