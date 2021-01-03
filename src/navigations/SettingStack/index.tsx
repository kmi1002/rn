import React, { Fragment } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingScreen from '@screens/Main/Setting/SettingScreen';
import ProfileScreen from '@screens/Main/Setting/ProfileScreen';

const SettingStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="setting" component={SettingScreen} />
      <Stack.Screen name="profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default SettingStack;
