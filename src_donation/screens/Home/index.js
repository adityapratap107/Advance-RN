import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import globalStyle from '../../assets/styles/globalStyle';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Tab from '../../components/Tab';
import Badge from '../../components/Badge';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import Search from '../../components/Search';
import SingleDonationItem from '../../components/SingleDonationItem';
const Home = () => {
  return (
    <SafeAreaView style={globalStyle.backgroundWhite}>
      <Search onSearch={value => console.log(value)} />
      <View style={styles.donationItemContainer}>

      <SingleDonationItem
        uri={
          'https://images.unsplash.com/photo-1615669527499-501446dd48e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FjdHVzJTIwcGxhbnR8ZW58MHx8MHx8fDA%3D&w=1000&q=80'
        }
        badgeTitle={'Environment'}
        donationTitle={'Tree Cactus'}
        price={44}
        />
      <SingleDonationItem
        uri={
          'https://images.unsplash.com/photo-1615669527499-501446dd48e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FjdHVzJTIwcGxhbnR8ZW58MHx8MHx8fDA%3D&w=1000&q=80'
        }
        badgeTitle={'Environment'}
        donationTitle={'Tree Cactus'}
        price={44}
        />
        </View>
    </SafeAreaView>
  );
};

export default Home;
