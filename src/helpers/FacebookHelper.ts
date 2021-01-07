import { AccessToken, LoginManager } from 'react-native-fbsdk';

const FacebokHelper = {
  onLogin: async () => {
    try {
      const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
      if (result.isCancelled) {
        return Promise.reject('Login is cancelled');
      } else {
        const data = await AccessToken.getCurrentAccessToken();
        if (!data) {
          return Promise.reject('No access token found');
        }

        return Promise.resolve({ provider: 'facebook', accessToken: data.accessToken });
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
};

export default FacebokHelper;
