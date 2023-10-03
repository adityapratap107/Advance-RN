import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  box: {
    height: 100,
    width: 100,
    backgroundColor: 'orange',
  },
  button: {
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 120,
    height: 40,
    borderRadius: 20,
    marginTop: 16,
  },
  buttonOuterView: {
    marginTop: 60,
  },
  pressButtonStyle: {
    backgroundColor: 'black',
    padding: 12,
    marginHorizontal: 120,
    marginTop: 60
  }
});

export default styles;
