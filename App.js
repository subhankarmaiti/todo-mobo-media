import 'react-native-gesture-handler';

import { NativeBaseProvider } from 'native-base';
import { Provider } from 'react-redux';
import React from 'react';
import RootNavigators from 'navigators';
import store from 'store';
import theme from 'patterns/theme';

const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <Provider store={store}>
        <RootNavigators />
      </Provider>
    </NativeBaseProvider>
  );
};
export default App;
