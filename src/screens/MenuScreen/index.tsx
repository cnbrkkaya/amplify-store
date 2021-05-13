import React from 'react';
import {Auth} from 'aws-amplify';
import {SafeAreaView} from 'react-native';
import Button from '../../components/Button';

const MenuScreen = () => {
  const onLogout = () => {
    Auth.signOut();
  };
  return (
    <SafeAreaView>
      <Button text="Sign Out" onPress={onLogout} />
    </SafeAreaView>
  );
};

export default MenuScreen;
