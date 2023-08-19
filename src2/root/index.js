import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {Button} from 'react-native';
import {ThemeContext} from '../context/ThemeContext';
import Home from '../component/home';
import useToggle from '../customHooks/useToggle';

const Root = () => {
  const array = new Array(1000).fill(0);
  const scrollRef = useRef(null);
  const onTopHandle = () => {
    scrollRef.current.scrollTo({x: 0, y: 0});
  };

  // theme change code
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

//   custom hook
  const [isOn, toggleIsOn] = useToggle(false);

  return (
    <ThemeContext.Provider value={isDarkMode}>
      <SafeAreaView
        style={{
          paddingBottom: 80,
          backgroundColor: isDarkMode ? '#222222' : '#ffffff',
        }}>
        <Button title="Switch Mode" onPress={toggleTheme} />
        <Button title="Toggle" onPress={toggleIsOn} />
        <Text>{isOn ? 'ON' : 'OFF'}</Text>
        <Home />
        <ScrollView ref={scrollRef}>
          {array.map((item, index) => (
            <Text key={index} style={{color: isDarkMode ? '#fff' : '#222222'}}>hello world {index}</Text>
          ))}
        </ScrollView>
        <Button title="Move to Top" onPress={onTopHandle} />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
};
export default Root;

const styles = StyleSheet.create({});
