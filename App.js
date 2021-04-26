import React from 'react';

import RootStack from './src/navigator/stack/RootStack';
import { Provider } from 'react-redux';
import { createStore } from "redux";
import reducer from './src/reducers/reducer';
 import ScreenLogin from './src/components/Login'
import SplashScreen from './src/components/SplashScreen';
const store = createStore(reducer);

const PhamJin =  () => {
  const [isLoading, setLoading] = React.useState(true);
  React.useEffect(() =>{
    setTimeout(() =>{
      setLoading(false);
    }, 5000);
  }, [])
  return isLoading ? <SplashScreen/> : <RootStack/>;
};

const App =  () =>{
  return(
    <Provider store={store}>
      <PhamJin/> 
    </Provider>
  );
}

export default App;
