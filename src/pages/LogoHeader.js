import React from 'react';
import { Image, View } from 'react-native';

export function LogoHeader() {
  return (
    <View style={{ position: 'absolute', left: 160, right: 0, alignItems: 'center' }}>
      <Image
        source={require('../../assets/logoMarvel.png')}
        style={{ width: 120, height: 30, resizeMode: 'contain' }}
      />
    </View>
  );
}
