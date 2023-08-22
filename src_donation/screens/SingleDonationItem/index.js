import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import globalStyle from '../../assets/styles/globalStyle';
import BackButton from '../../components/BackButton';
import styles from './styles';
import Badge from '../../components/Badge';
import Header from '../../components/Header';
import {colors} from '../../assets/colors';
import Button from '../../components/Button';

const SingleDonationItem = ({navigation, route}) => {
  const donationItemInformation = useSelector(
    state => state.donations.selectedDonationInformation,
  );
  console.log('donationItemInformation', donationItemInformation);
  console.log(route);
  const categoryInformation = route?.params?.categoryInformation;
  return (
    <SafeAreaView style={globalStyle.backgroundWhite}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <BackButton onPress={() => navigation.goBack()} />
        <Image
          source={{uri: donationItemInformation.image}}
          style={styles.image}
        />
        <View style={styles.badge}>
          <Badge title={categoryInformation.name} />
        </View>
        <Header
          type={1}
          title={donationItemInformation.name}
          color={colors.black}
        />
        <Text style={styles.description}>
          {donationItemInformation.description}
        </Text>
      </ScrollView>
      <View style={styles.button}>
        <Button title={'Donate'} />
      </View>
    </SafeAreaView>
  );
};

export default SingleDonationItem;
