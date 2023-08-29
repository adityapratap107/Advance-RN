import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import globalStyle from '../../assets/styles/globalStyle';
import Input from '../../components/Input';
import styles from './styles';
import Header from '../../components/Header';
import {colors} from '../../assets/colors';
import Button from '../../components/Button';
import {createUser} from '../../api/User';

const Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  return (
    <SafeAreaView style={globalStyle.backgroundWhite}>
      {/* <Text>Register</Text> */}
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}>
        <View style={globalStyle.marginBottom24}>
          <Header
            title={'Hello and Welcome !'}
            type={1}
            color={colors.blackTwo}
          />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Input
            label="First & Last Name"
            placeHolder={'Enter your full name...'}
            onChangeText={val => setFullName(val)}
          />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Input
            label="Email"
            placeHolder={'Enter your email...'}
            onChangeText={val => setEmail(val)}
            keyboardType={'email-address'}
          />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Input
            label="Password"
            secureTextEntry={true}
            placeHolder={'******'}
            onChangeText={val => setPassword(val)}
          />
        </View>

        {error.length > 0 ? (
          <View>
            <Text style={styles.error}>{error}</Text>
          </View>
        ) : (
          <Text style={styles.success}>{success}</Text>
        )}

        <View style={styles.buttonView}>
          <Button
            isDisabled={
              fullName.length <= 2 || email.length <= 5 || password.length <= 8
            }
            title="Register"
            buttonContainerStyle={styles.buttonStyle}
            onPress={async () => {
              let user = await createUser(fullName, email, password);
              if (user.error) {
                setError(user.error);
              } else {
                setError('');
                setSuccess('You have successfully registered.');
                setTimeout(() => {
                  navigation.goBack();
                }, 3000);
              }
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;
