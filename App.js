import React from 'react';

import RootStack from './src/navigator/RootStack';
import { Provider } from 'react-redux';
import { createStore } from "redux";
import reducer from './src/reducers/reducer';
const store = createStore(reducer);
const App =  () => {
  return (
  <Provider store={store}>
      <RootStack/>
   </Provider>
  );
};


export default App;
