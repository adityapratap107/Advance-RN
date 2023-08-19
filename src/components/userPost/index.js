import {Image, Pressable, Text, View} from 'react-native';
import React from 'react';
import styles from './style';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import {
  faBookmark,
  faComment,
  faHeart,
} from '@fortawesome/free-regular-svg-icons';
import UserProfileImage from '../common/userProfileImage';
const UserPost = props => {
  return (
    <View style={styles.container}>
      <View style={styles.userInformationContainer}>
        <View style={styles.postHeaderContainer}>
          <UserProfileImage />
          <View style={styles.nameLocationContainer}>
            <Text style={styles.name}>
              {props.firstName} {props.lastName}{' '}
            </Text>
            {props.location && (
              <Text style={styles.location}>{props.location}</Text>
            )}
          </View>
          <View style={styles.dotIconView}>
            <FontAwesomeIcon icon={faEllipsisH} color={'#79869f'} size={20} />
          </View>
        </View>
      </View>

      <View style={styles.postImageView}>
        <Image source={require('../../assets/images/userPost/EmptyPost.png')} />
      </View>

      <View style={styles.userStatsView}>
        <Pressable style={styles.userPostStatButton}>
          <FontAwesomeIcon icon={faHeart} style={styles.userPostStatIcon} />
          <Text style={styles.userPostStatText}>{props.likes}</Text>
        </Pressable>
        <Pressable style={styles.userPostStatButton}>
          <FontAwesomeIcon icon={faComment} style={styles.userPostStatIcon} />
          <Text style={styles.userPostStatText}>{props.comments}</Text>
        </Pressable>
        <Pressable style={styles.userPostStatButton}>
          <FontAwesomeIcon icon={faBookmark} style={styles.userPostStatIcon} />
          <Text style={styles.userPostStatText}>{props.bookmarks}</Text>
        </Pressable>
      </View>
    </View>
  );
};

UserPost.PropTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  likes: PropTypes.string.isRequired,
  comments: PropTypes.string.isRequired,
  bookmarks: PropTypes.string.isRequired,
  location: PropTypes.string,
};

export default UserPost;
