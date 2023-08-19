import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import styles from './styles';
import globalStyles from '../../assets/styles/main';
import { ProfileTabNavigation } from '../../navigation';

const Profile = () => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView>
        <View style={styles.profileContainer}>
          <Image
            source={require('../../assets/images/userProfile/profileCircle.png')}
            style={styles.profileImage}
          />
        </View>
        <View style={styles.userNameContainer}>
          <Text style={styles.userName}>Emmanuel Robertsen</Text>
        </View>
        <View style={styles.profileStatsContainer}>
          <View style={[styles.singleStatContainer, styles.midStatValue]}>
            <Text style={styles.statValue}>45</Text>
            <Text style={styles.statHeading}>Following</Text>
          </View>
          <View style={[styles.singleStatContainer, styles.midStatValue]}>
            <Text style={styles.statValue}>45</Text>
            <Text style={styles.statHeading}>Followers</Text>
          </View>
          <View style={styles.singleStatContainer}>
            <Text style={styles.statValue}>45</Text>
            <Text style={styles.statHeading}>Post</Text>
          </View>
        </View>
        <View style={styles.line}></View>
        <View style={{height: '100%'}}>
            <ProfileTabNavigation />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
