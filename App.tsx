import React, {useEffect} from 'react';
import Route from './src/navigation/Route';
import {LogBox} from 'react-native';
import store from './src/services/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
const persistStore = store();
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);
const App = () => {
  return (
    <Provider store={persistStore.store}>
      <PersistGate loading={null} persistor={persistStore.persistor}>
        <Route />
      </PersistGate>
    </Provider>
  );
};

export default App;
