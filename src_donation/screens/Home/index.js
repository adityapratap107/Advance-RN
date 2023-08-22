import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import globalStyle from '../../assets/styles/globalStyle';
import Header from '../../components/Header';
import Tab from '../../components/Tab';
import Search from '../../components/Search';
import SingleDonationItem from '../../components/SingleDonationItem';
import {colors} from '../../assets/colors';
import {useDispatch, useSelector} from 'react-redux';
import {resetToInitialState, updateFirstName} from '../../redux/reducers/User';
import {updateSelectedCategoryId} from '../../redux/reducers/Categories';
import {
  resetDonations,
  updateSelectedDonationId,
} from '../../redux/reducers/Donations';
import {Routes} from '../../navigation/Routes';
const Home = ({navigation}) => {
  const user = useSelector(state => state.user);
  // console.log(user);

  const categoriesData = useSelector(state => state.categories);
  // console.log(categoriesData);

  const donations = useSelector(state => state.donations);
  // console.log(donations);

  const dispatch = useDispatch();
  // dispatch(resetToInitialState());
  // dispatch(resetDonations());

  const [categoryPage, setCategoryPage] = useState(1);
  const [categoryList, setCategoryList] = useState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(false);
  const categorypageSize = 4;

  const [donationItems, setDonationItems] = useState([]);

  useEffect(() => {
    // console.log('run this func');
    const items = donations.items;
    const filteredItems = items.filter(value =>
      value?.categoryIds?.includes(categoriesData.selectedCategoryId),
    );
    setDonationItems(filteredItems);
    // console.log('FilteredItem: ', filteredItems);
  }, [categoriesData.selectedCategoryId]);

  useEffect(() => {
    setIsLoadingCategories(true);
    setCategoryList(
      pagination(categoriesData.categories, categoryPage, categorypageSize),
    );
    setCategoryPage(prev => prev + 1);
    setIsLoadingCategories(false);
  }, []);

  const pagination = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= items.length) {
      return [];
    }
    return items.slice(startIndex, endIndex);
  };

  return (
    <SafeAreaView style={globalStyle.backgroundWhite}>
      <ScrollView>
        <View style={styles.header}>
          <View>
            <Text>Hello, </Text>
            <View style={styles.userName}>
              <Header
                title={user.firstName + ' ' + user.lastName[0] + '.👋'}
                color={colors.black}
              />
            </View>
          </View>
          <Image
            source={{uri: user.profileImage}}
            style={styles.profileImage}
            resizeMode={'contain'}
          />
        </View>

        {/* <Pressable onPress={() => dispatch(updateFirstName({firstName: 'A'}))}>
          <Text>Press Me to change fist name</Text>
        </Pressable> */}

        <View style={styles.searchBox}>
          <Search onSearch={value => console.log(value)} />
        </View>

        <Pressable style={styles.highlightedImageContainer}>
          <Image
            source={require('../../assets/images/highlighted_image.png')}
            resizeMode={'contain'}
            style={styles.highlightedImage}
          />
        </Pressable>

        <View style={styles.categories}>
          <Header title={'Select Category'} color={colors.black} type={2} />
          <FlatList
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (isLoadingCategories) {
                return;
              }
              setIsLoadingCategories(true);
              let newData = pagination(
                categoriesData.categories,
                categoryPage,
                categorypageSize,
              );
              if (newData.length > 0) {
                setCategoryList(prev => [...prev, ...newData]);
                setCategoryPage(prev => prev + 1);
              }
              setIsLoadingCategories(false);
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
            // data={categoriesData.categories}
            data={categoryList}
            renderItem={({item}) => (
              <View style={styles.categoryItem} key={item.categoryId}>
                <Tab
                  tabId={item.categoryId}
                  onPress={value => dispatch(updateSelectedCategoryId(value))}
                  title={item.name}
                  isInActive={
                    item.categoryId !== categoriesData.selectedCategoryId
                  }
                />
              </View>
            )}
          />
        </View>

        {donationItems.length > 0 && (
          <View style={styles.donationItemContainer}>
            {donationItems.map(value => {
              const categoryInformation = categoriesData.categories.find(
                val => val.categoryId === categoriesData.selectedCategoryId,
              );
              return (
                <View
                  key={value.donationItemId}
                  style={styles.singleDonationItem}>
                  <SingleDonationItem
                    onPress={selectedDonationId => {
                      console.log(selectedDonationId);
                      dispatch(updateSelectedDonationId(selectedDonationId));
                      navigation.navigate(Routes.SingleDonationItem, {
                        categoryInformation,
                      });
                    }}
                    donationItemId={value.donationItemId}
                    uri={value.image}
                    badgeTitle={categoryInformation.name}
                    donationTitle={value.name}
                    price={parseFloat(value.price)}
                  />
                </View>
              );
            })}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
