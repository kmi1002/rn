import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardScreen from '@screens/Main/DashboardScreen';
import SettingStack from '@navigations/SettingStack';

const AuthStack = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="dashboard" component={DashboardScreen} />
      <Tab.Screen name="setting" component={SettingStack} />
    </Tab.Navigator>
  );
};

export default AuthStack;
