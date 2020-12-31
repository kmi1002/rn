import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { RootState } from '@/stores';
import { LoginScreen, ProfileScreen, SurveyScreen, UtilityScreen } from '@screens/Auth';
import TermsScreen from '@screens/Common/TermsScreen';
import * as navigationOptions from '@helpers/NavigationBar';
import ScreenAuthType from './type';
import { SignupStep } from '@stores/auth/type';

const AuthStack = () => {
  const Stack = createStackNavigator();

  const { signupStep } = useSelector((state: RootState) => state.auth);

  const isDone = () => {
    return signupStep === SignupStep.INIT;
  };

  return (
    <Stack.Navigator>
      {isDone() ? (
        <Stack.Screen name={ScreenAuthType.SCREEN_AUTH_LOGIN} component={LoginScreen} options={{ headerStyle: {} }} />
      ) : (
        <Fragment>
          <Stack.Screen
            name={ScreenAuthType.SCREEN_AUTH_SIGNUP_PROFILE}
            component={ProfileScreen}
            options={navigationOptions.signupOptions(3, 1)}
          />
          <Stack.Screen
            name={ScreenAuthType.SCREEN_AUTH_SIGNUP_SURVEY}
            component={SurveyScreen}
            options={navigationOptions.signupOptions(3, 2)}
          />
          <Stack.Screen
            name={ScreenAuthType.SCREEN_AUTH_SIGNUP_UTILITY}
            component={UtilityScreen}
            options={navigationOptions.signupOptions(3, 3)}
          />
        </Fragment>
      )}
      <Stack.Screen
        name={ScreenAuthType.SCREEN_AUTH_TERMS}
        component={TermsScreen}
        options={navigationOptions.termsOptions}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
