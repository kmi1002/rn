import React from 'react';
import { Provider } from 'react-redux';
// import { ThemeProvider } from 'styled-components/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ErrorBoundary from '@helpers/ErrorBoundary';
import AppStack from '@navigations/AppStack';
import { store } from '@constants/configureStore';
import '@helpers/i18n';

const App = () => {
  return (
    <Provider store={store}>
      {/*<ThemeProvider theme={Theme}>*/}
      <SafeAreaProvider>
        <ErrorBoundary>
          <AppStack />
        </ErrorBoundary>
      </SafeAreaProvider>
      {/*</ThemeProvider>*/}
    </Provider>
  );
};
export default App;
