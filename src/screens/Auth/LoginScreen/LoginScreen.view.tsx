import React from 'react';
import { Button, SafeAreaView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreenView = () => {
  const navigation = useNavigation();

  const onLogin = () => {
    navigation.navigate('dashboard');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#adadad' }}>
      <View style={{ flex: 1, backgroundColor: '#ededed' }}>
        <Button title="Login" onPress={onLogin} />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreenView;
