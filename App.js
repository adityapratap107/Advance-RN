import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ball from './src1/ball';
import Deck from './src1/Deck';
import {Button, Card} from 'react-native-elements';

const DATA = [
  {
    id: 1,
    text: 'Card #1',
    uri: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg',
  },
  {
    id: 2,
    text: 'Card #2',
    uri: 'https://e0.pxfuel.com/wallpapers/613/136/desktop-wallpaper-lake-sunset-awesome-lightness-pc-cena-colors-reflections-nice-sunbeam-background-scenery-bright-trees-fullscreen-calm-scenario-mirror-sunshine-sunsets-sundown-forests-panorama-thumbnail.jpg',
  },
  {
    id: 3,
    text: 'Card #3',
    uri: 'https://wallpaperaccess.com/full/2390200.jpg',
  },
  {
    id: 4,
    text: 'Card #4',
    uri: 'https://img.freepik.com/premium-photo/mangrove-trees-coral-tanjung-pinggir-beach-batam-island-sunset_103127-629.jpg',
  },
  {
    id: 5,
    text: 'Card #5',
    uri: 'https://www.pixel4k.com/wp-content/uploads/2018/10/beautiful-sunset-on-dirt-road-4k_1540132658.jpg',
  },
  {
    id: 6,
    text: 'Card #6',
    uri: 'https://wallpaperset.com/w/full/8/1/d/147854.jpg',
  },
  {
    id: 7,
    text: 'Card #7',
    uri: 'https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg?cs=srgb&dl=pexels-pixabay-33045.jpg&fm=jpg',
  },
  {
    id: 8,
    text: 'Card #8',
    uri: 'https://c4.wallpaperflare.com/wallpaper/764/505/66/baby-groot-4k-hd-superheroes-wallpaper-preview.jpg',
  },
];

const App = () => {
  const renderCard = item => {
    return (
      <Card title={item.text}>
        <Image source={{uri: item.uri}} style={{height: 200, width: '100%'}} />
        <Text>{item.text}</Text>
        <Button
          icon={{name: 'code'}}
          backgroundColor="#03a9f4"
          title="View Now"
        />
      </Card>
    );
  };
  return (
    <View style={styles.app}>
      {/* <Ball /> */}
      <Deck data={DATA} renderCard={renderCard} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
