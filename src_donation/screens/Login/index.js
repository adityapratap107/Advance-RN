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
import {Routes} from '../../navigation/Routes';
import {loginUser} from '../../api/User';
import { useDispatch } from 'react-redux';
import { logIn, resetToInitialState } from '../../redux/reducers/User';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  // dispatch(resetToInitialState());

  return (
    <SafeAreaView style={globalStyle.backgroundWhite}>
      {/* <Text>Login</Text> */}
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}>
        <View style={globalStyle.marginBottom24}>
          <Header title={'Welcome Back'} type={1} color={colors.blackTwo} />
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
          <Text style={styles.error}>{error}</Text>
        ) : (
          <Text style={styles.success}>{success}</Text>
        )}

        <View style={[styles.buttonView, error.length > 0 && {marginTop: 24}]}>
          <Button
            title="Login"
            buttonContainerStyle={styles.buttonStyle}
            isDisabled={email.length < 5 || password.length < 8}
            onPress={async () => {
              let user = await loginUser(email, password);
              if (!user.status) {
                setError(user.error);
              } else {
                setError('');
                setSuccess('Login Successfully.');
                dispatch(logIn(user.data));
                navigation.navigate(Routes.Home);
              }
            }}
          />
        </View>
        <Pressable
          style={styles.footerView}
          onPress={() => {
            navigation.navigate(Routes.Register);
          }}>
          <Text style={styles.footerText}>Don't have an account?</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
