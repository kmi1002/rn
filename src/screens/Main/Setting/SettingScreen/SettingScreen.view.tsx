import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, SafeAreaView, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { logoutSuccess } from '@stores/auth';

const SettingScreenView = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onLogin = () => {
    navigation.navigate('profile');
  };

  const onLogout = () => {
    dispatch(logoutSuccess());
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
