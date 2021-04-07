import React from 'react';

import RootStack from './src/navigator/stack/RootStack';
import { Provider } from 'react-redux';
import { createStore } from "redux";
import reducer from './src/reducers/reducer';
 import ScreenLogin from './src/components/Login'
const store = createStore(reducer);
const App =  () => {
  return (
  <Provider store={store}>
      <RootStack/>
   </Provider>
  //  <ScreenLogin />
  );
};


export default App;
