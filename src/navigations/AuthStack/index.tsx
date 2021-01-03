import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '@screens/Auth/LoginScreen';

const AuthStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
