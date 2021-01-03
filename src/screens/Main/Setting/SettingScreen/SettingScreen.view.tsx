import React from 'react';
import { Button, SafeAreaView, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SettingScreenView = () => {
  const navigation = useNavigation();

  const onLogin = () => {
    navigation.navigate('profile');
  };

  const onLogout = () => {
    navigation.navigate('login');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#adadad' }}>
      <View style={{ flex: 1, backgroundColor: '#ededed' }}>
        <Button title="profile" onPress={onLogin} />
        <Button title="logout" onPress={onLogout} />
      </View>
    </SafeAreaView>
  );
};

export default SettingScreenView;
