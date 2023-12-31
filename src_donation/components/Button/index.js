import PropTypes from 'prop-types';
import {Pressable, Text} from 'react-native';
import styles from './styles';

const Button = props => {
  return (
    <Pressable
      onPress={() => props.onPress()}
      disabled={props.isDisabled}
      style={[
        styles.button,
        props.isDisabled && styles.disabledButton,
        props.buttonContainerStyle,
      ]}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </Pressable>
  );
};
Button.default = {
  isDisabled: false,
  onPress: () => {},
};
Button.propTypes = {
  title: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  onPress: PropTypes.func,
  buttonContainerStyle: PropTypes.object,
};

export default Button;
