import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import styles from './styles';
import globalStyles from '../../assets/styles/main';
import {ProfileTabNavigation} from '../../navigation';
import FollowValue from '../../components/common/FollowerPostValue';
import ProfileName from '../../components/common/ProfileName';

const Profile = () => {
  const [following, setFollowing] = useState(0);
  const [followers, setFollowers] = useState(0);
  const [posts, setPosts] = useState(0);
  const [postCount, setPostCount] = useState(0);
  const onIncreaseFollowing = useCallback(() => {
    setFollowing(following + 1);
  }, [following]);
  const onDecreaseFollowing = () => {
    setFollowing(following - 1);
  };
  const onIncreaseFollowers = () => {
    setFollowers(followers + 1);
  };
  const onDecreaseFollowers = () => {
    setFollowers(followers - 1);
  };

  const onIncreasePostbyTwo = useMemo(() => {
    console.log('multiple by 2 function called');
    return posts * 2;
  }, [posts]);

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView>
        <View style={styles.profileContainer}>
          <Image
            source={require('../../assets/images/userProfile/profileCircle.png')}
            style={styles.profileImage}
          />
        </View>
        <ProfileName
          title={'Emmanuel Robertsen'}
          onIncreaseCall={onIncreaseFollowing}
        />
        <View style={styles.profileStatsContainer}>
          <View style={[styles.singleStatContainer, styles.midStatValue]}>
            <FollowValue value={following} />
            <Text style={styles.statHeading}>Following</Text>
          </View>
          <View style={[styles.singleStatContainer, styles.midStatValue]}>
            <FollowValue value={followers} />
            <Text style={styles.statHeading}>Followers</Text>
          </View>
          <View style={styles.singleStatContainer}>
            <Text style={styles.statValue}>{onIncreasePostbyTwo}</Text>
            <Text style={styles.statValue}>{postCount}</Text>
            <Text style={styles.statHeading}>Post</Text>
          </View>
        </View>

        <View style={styles.buttonView}>
          <Pressable style={styles.incBtn} onPress={onDecreaseFollowing}>
            <Text>Following -</Text>
          </Pressable>
          <Pressable style={styles.incBtn} onPress={onIncreaseFollowing}>
            <Text>Following +</Text>
          </Pressable>
        </View>
        <View style={styles.buttonView}>
          <Pressable style={styles.incBtn} onPress={onDecreaseFollowers}>
            <Text>Followers -</Text>
          </Pressable>
          <Pressable style={styles.incBtn} onPress={onIncreaseFollowers}>
            <Text>Followers +</Text>
          </Pressable>
        </View>
        <View style={styles.buttonView}>
          <Pressable style={styles.incBtn} onPress={() => setPosts(posts + 1)}>
            <Text>Posts</Text>
          </Pressable>
          <Pressable
            style={styles.incBtn}
            onPress={() => setPostCount(postCount + 1)}>
            <Text>Posts +</Text>
          </Pressable>
        </View>
        <View style={styles.line} />
        <View style={{height: '100%'}}>
          <ProfileTabNavigation />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
