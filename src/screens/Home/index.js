import {
  Dimensions,
  FlatList,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Switch,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Title from '../../components/title';
import styles from './styles';
import {colors} from '../../assets/colors';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import UserPost from '../../components/userPost';
import UserStory from '../../components/userStory';
import Routes from '../../navigation/Routes';

const Home = ({navigation}) => {
  const data = [
    {
      firstName: 'Joseph',
      id: 1,
    },
    {
      firstName: 'Angel',
      id: 2,
    },
    {
      firstName: 'White',
      id: 3,
    },
    {
      firstName: 'olivier',
      id: 4,
    },
    {
      firstName: 'John',
      id: 5,
    },
    {
      firstName: 'Smith',
      id: 6,
    },
    {
      firstName: 'James',
      id: 7,
    },
    {
      firstName: 'David',
      id: 8,
    },
  ];

  const posts = [
    {
      firstName: 'Allison',
      lastName: 'Becker',
      location: 'Sukabumi, Jawa Barat',
      likes: 1201,
      comments: 24,
      bookmarks: 55,
      id: 1,
    },
    {
      firstName: 'Jennifer',
      lastName: 'Wilkson',
      location: 'Pondok Leungsir, Jawa Barat',
      likes: 570,
      comments: 12,
      bookmarks: 60,
      id: 2,
    },
    {
      firstName: 'Adam',
      lastName: 'Spera',
      location: 'Boston, Massachusetts',
      likes: 100,
      comments: 8,
      bookmarks: 7,
      id: 3,
    },
    {
      firstName: 'Nata',
      lastName: 'Vacheishvili',
      location: 'New York, New York',
      likes: 300,
      comments: 18,
      bookmarks: 17,
      id: 4,
    },
    {
      firstName: 'Nicolas',
      lastName: 'Namoradze',
      location: 'Berlin, Germany',
      likes: 1240,
      comments: 56,
      bookmarks: 20,
      id: 5,
    },
  ];

  // for stories
  const pageSize = 4;
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [renderedData, setRenderedData] = useState(data.slice(0, pageSize));

  // for posts
  const pageSizePosts = 2;
  const [postPageNumber, setPostPageNumber] = useState(1);
  const [isLoadingPosts, setIsLoadingPosts] = useState(false);
  const [renderedDataPosts, setRenderedDataPosts] = useState(
    posts.slice(0, pageSizePosts),
  );

  // dimensions
  const [screenData, setScreenData] = useState(Dimensions.get('screen'));
  console.log('screendata', screenData);
  useEffect(() => {
    Dimensions.addEventListener('change', result => {
      console.log('Changed Screen Data', result);
      setScreenData(result.screen);
    });
  }, []);

  // padination function
  const pagination = (data, pageNumber, pageSize, posts = false) => {
    let startIndex = (pageNumber - 1) * pageSize;
    if (startIndex >= data.length) {
      return [];
    }
    if (!posts) {
      setPageNumber(pageNumber);
    } else {
      setPostPageNumber(pageNumber);
    }
    return data.slice(startIndex, startIndex + pageSize);
  };

  const [isOn, setIsOn] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={colors.white} />
      <ScrollView>
        <View style={styles.header}>
          <Title title="Let’s Explore" />
          <Switch
            value={isOn}
            onValueChange={value => setIsOn(value)}
            style={[
              Platform.OS === 'android' && {
                transform: [{scaleX: 1.2}, {scaleY: 1.2}],
              },
            ]}
            trackColor={
              Platform.OS === 'android' && {false: 'grey', true: 'red'}
            }
          />

          <Pressable
            style={styles.messageIcon}
            onPress={() => navigation.navigate(Routes.Profile)}>
            <FontAwesomeIcon icon={faEnvelope} color={'#cacdde'} />
            <View style={styles.countContainer}>
              <Text
                style={[styles.msgCount, {fontSize: screenData.height / 130}]}>
                2
              </Text>
            </View>
          </Pressable>
        </View>

        <View style={styles.storyView}>
          <FlatList
            data={renderedData}
            keyExtractor={item => item.id.toString()}
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (!isLoading) {
                setIsLoading(true);
                setRenderedData(prev => [
                  ...prev,
                  ...pagination(data, pageNumber + 1, pageSize),
                ]);
                setIsLoading(false);
              }
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => <UserStory firstName={item.firstName} />}
          />
        </View>

        <View style={styles.userPostContainer}>
          <FlatList
            data={renderedDataPosts}
            keyExtractor={item => item.id.toString()}
            onMomentumScrollBegin={() => setIsLoadingPosts(false)}
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (!isLoadingPosts) {
                setIsLoadingPosts(true);
                // setRenderedDataPosts(prev => [
                //   ...prev,
                //   ...pagination(posts, postPageNumber + 1, pageSizePosts, true),
                // ]);
                setRenderedDataPosts(prev =>
                  prev.concat(
                    pagination(posts, postPageNumber + 1, pageSizePosts, true),
                  ),
                );
                setIsLoadingPosts(false);
              }
            }}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <UserPost
                firstName={item.firstName}
                lastName={item.lastName}
                comments={item.comments}
                likes={item.likes}
                bookmarks={item.bookmarks}
                location={item.location}
              />
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
