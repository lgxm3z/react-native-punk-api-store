/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, SafeAreaView, Platform, StatusBar} from 'react-native';
import TheBeerSVG from '../../assets/the-beer-2.svg';

interface IProps {
  children: React.ReactNode;
}

const Layout = (props: IProps) => {
  const STATUS_BAR_HEIGHT =
    Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

  return (
    <>
      <View
        style={{
          width: '100%',
          height: 45 + (STATUS_BAR_HEIGHT || 0),
          paddingTop: Platform.OS === 'ios' ? STATUS_BAR_HEIGHT : 0,
          backgroundColor: '#0F0C0A',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={{marginLeft: 8}}>
          <TheBeerSVG width={140} height={45} />
        </View>
      </View>
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        {props.children}
      </SafeAreaView>
    </>
  );
};

export default Layout;
