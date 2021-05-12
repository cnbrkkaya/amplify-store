import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
//Screen imports
// import HomeScreen from './src/screens/HomeScreen';
import ProductScreen from './src/screens/ProductScreen';
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ProductScreen />
    </SafeAreaView>
  );
};

export default App;
