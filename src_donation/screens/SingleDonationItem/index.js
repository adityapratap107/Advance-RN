import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {colors} from '../../assets/colors';
import globalStyle from '../../assets/styles/globalStyle';
import BackButton from '../../components/BackButton';
import Badge from '../../components/Badge';
import Button from '../../components/Button';
import Header from '../../components/Header';
import styles from './styles';

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
