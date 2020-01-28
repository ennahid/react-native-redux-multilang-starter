/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useEffect, useCallback} from 'react';
import {View, Text} from 'react-native';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import rootReducer from './redux/reducers';
import {setI18nConfig, RnLocalize, translate} from './translations/helper';

const client = axios.create({
  baseURL: 'https://api.github.com',
  responseType: 'json',
});

const store = createStore(
  rootReducer,
  applyMiddleware(axiosMiddleware(client)),
);

const App = () => {
  setI18nConfig();
  const [, updateState] = React.useState();

  useEffect(() => {
    RnLocalize.addEventListener('change', handleLocalizationChange);
    return () => {
      RnLocalize.removeEventListener('change', handleLocalizationChange);
    };
  }, []);
  const forceUpdate = useCallback(() => updateState({}), []);

  const handleLocalizationChange = () => {
    setI18nConfig();
    forceUpdate();
  };
  return (
    <Provider store={store}>
      <View>
        <Text>{translate('hello')}</Text>
      </View>
    </Provider>
  );
};

export default App;
