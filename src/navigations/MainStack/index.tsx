import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SiteSyncScreen, SiteUpdateScreen, DashboardScreen, TrendsScreen } from '@/screens/Main';
import { MessageStack, SettingStack } from '@/navigations';
import { RootState } from '@/stores';
import { IconType } from '@atoms/Icon/type';
import TabBarIcon from '@molecules/TabBarIcon';
import * as navigationOptions from '@helpers/NavigationBar';
import ScreenMainType from './type';

const AuthStack = () => {
  const { t } = useTranslation();
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  const { isFirstSync, isSiteUpdate } = useSelector((state: RootState) => state.main);

  return (
    <Fragment>
      {isFirstSync || !isSiteUpdate ? (
        <Stack.Navigator>
          {isFirstSync && (
            <Stack.Screen
              name={ScreenMainType.SCREEN_MAIN_SITE_SYNC}
              component={SiteSyncScreen}
              options={navigationOptions.siteOptions(t('settingScreen.logout'))}
            />
          )}
          {!isSiteUpdate && (
            <Stack.Screen
              name={ScreenMainType.SCREEN_MAIN_SITE_UPDATE}
              component={SiteUpdateScreen}
              options={navigationOptions.siteOptions(t('settingScreen.logout'))}
            />
          )}
        </Stack.Navigator>
      ) : (
        <Tab.Navigator tabBarOptions={{ showLabel: false }}>
          <Tab.Screen
            name={ScreenMainType.SCREEN_MAIN_DASHBOARD}
            component={DashboardScreen}
            options={{
              title: t('dashboardScreen.title'),
              tabBarIcon: ({ focused }) => {
                return (
                  <TabBarIcon
                    selected={focused}
                    active={IconType.MENU_DASHBOARD_ACTIVE}
                    deactive={IconType.MENU_DASHBOARD_DEACTIVE}
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name={ScreenMainType.SCREEN_MAIN_TRENDS}
            component={TrendsScreen}
            options={{
              title: t('trendScreen.title'),
              tabBarIcon: ({ focused }) => {
                return (
                  <TabBarIcon
                    selected={focused}
                    active={IconType.MENU_TREND_ACTIVE}
                    deactive={IconType.MENU_TREND_DEACTIVE}
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name={ScreenMainType.SCREEN_MAIN_MESSAGES}
            component={MessageStack}
            options={{
              title: t('messagesScreen.title'),
              tabBarIcon: ({ focused }) => {
                return (
                  <TabBarIcon
                    selected={focused}
                    active={IconType.MENU_MESSAGE_ACTIVE}
                    deactive={IconType.MENU_MESSAGE_DEACTIVE}
                    dot={true}
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name={ScreenMainType.SCREEN_MAIN_SETTING}
            component={SettingStack}
            options={{
              title: t('settingScreen.title'),
              tabBarIcon: ({ focused }) => {
                return (
                  <TabBarIcon
                    selected={focused}
                    active={IconType.MENU_SETTING_ACTIVE}
                    deactive={IconType.MENU_SETTING_DEACTIVE}
                  />
                );
              },
            }}
          />
        </Tab.Navigator>
      )}
    </Fragment>
  );
};

export default AuthStack;
