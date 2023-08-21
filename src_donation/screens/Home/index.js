import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import globalStyle from '../../assets/styles/globalStyle';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Tab from '../../components/Tab';

const Home = () => {
  return (
    <SafeAreaView style={globalStyle.backgroundWhite}>
      <Header title={'Aditya R.'} type={1} />
      {/* <Button
        title={'Donate'}
        isDisabled={false}
        onPress={() => {
          console.log('press me');
        }}
      /> */}

      <Tab
        title={'Highlight'}
        isInActive={false}
        onPress={() => {
          console.log('press me');
        }}
      />
      <Tab
        title={'Highlight'}
        isInActive={true}
        onPress={() => {
          console.log('press me');
        }}
      />
    </SafeAreaView>
  );
};

export default Home;
