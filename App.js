import 'react-native-gesture-handler';

import { Provider } from 'react-redux';
import React from 'react';
import RootNavigators from 'navigators';
import store from 'store';

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigators />
    </Provider>
  );
};
export default App;
