import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ThemeContext} from '../../context/ThemeContext';

const Home = () => {
  const isDarkMode = useContext(ThemeContext);
  return (
    <View style={{backgroundColor: isDarkMode ? '#222222' : '#fff'}}>
      <Text style={{color: isDarkMode ? '#fff' : '#222222'}}>
        Welcome to the Application!!
      </Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
