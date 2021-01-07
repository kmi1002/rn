import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, SafeAreaView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { loginRequest, logoutSuccess } from '@stores/auth';
import { RootState } from '@stores/index';

const LoginScreenView = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const { authState, info } = useSelector((state: RootState) => state.auth);

  const onLogin = async () => {
    dispatch(loginRequest('email', '', 'admin@crocus.ai', 'Test123!@#'));
  };
  //
  // const onLogin = () => {
  //   navigation.navigate('dashboard');
  // };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#adadad' }}>
      <View style={{ flex: 1, backgroundColor: '#ededed' }}>
        <Button title="Login" onPress={onLogin} />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreenView;
