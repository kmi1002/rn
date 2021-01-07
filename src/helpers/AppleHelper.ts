import { appleAuth } from '@invertase/react-native-apple-authentication';

const AppleHelper = {
  isSupported: () => {
    return appleAuth.isSupported;
  },
  onCredentialRevoked: () => {
    appleAuth.isSupported &&
      appleAuth.onCredentialRevoked(async () => {
        console.warn('If this function executes, User Credentials have been Revoked');
      });
  },
  onLogin: async () => {
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    });

    // get current authentication state for user
    // /!\ This method must be tested on a real device. On the iOS simulator it always throws an error.
    const credentialState = await appleAuth.getCredentialStateForUser(appleAuthRequestResponse.user);

    // use credentialState response to ensure the user is authenticated
    if (credentialState === appleAuth.State.AUTHORIZED) {
      // user is authenticated
      const { identityToken, email, user } = appleAuthRequestResponse;

      if (!identityToken) {
        return Promise.reject('No access token found');
      }

      return Promise.resolve({ provider: 'apple', accessToken: identityToken });
    }

    return Promise.reject('No access token found');
  },
};

export default AppleHelper;
