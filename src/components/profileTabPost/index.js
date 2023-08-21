import {View, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import {Image} from 'react-native';

const ProfileTabPost = () => {
  return (
    <ScrollView
      style={styles.profileTabPostContainer}
      contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require('../../assets/images/userPost/EmptyPost.png')}
        />
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require('../../assets/images/userPost/EmptyPost.png')}
        />
      </View>
      <View style={[styles.imageContainer, styles.imageUpcomingRowContainer]}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require('../../assets/images/userPost/EmptyPost.png')}
        />
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require('../../assets/images/userPost/EmptyPost.png')}
        />
      </View>
      <View
        style={[
          styles.imageContainer,
          styles.imageUpcomingRowContainer,
          styles.lastImageContainer,
        ]}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require('../../assets/images/userPost/EmptyPost.png')}
        />
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require('../../assets/images/userPost/EmptyPost.png')}
        />
      </View>
    </ScrollView>
  );
};

export default ProfileTabPost;
