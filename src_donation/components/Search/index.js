import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import PropTypes from 'prop-types';
import {useRef, useState} from 'react';
import {Pressable, TextInput, View} from 'react-native';
import {colors} from '../../assets/colors';
import styles from './styles';

const Search = props => {
  const textinputRef = useRef(null);
  const [search, setSearch] = useState('');

  const handleFocus = () => {
    textinputRef.current.focus();
  };
  const handleSearch = value => {
    setSearch(value);
    props.onSearch(value);
  };
  return (
    <Pressable style={styles.searchContainer} onPress={handleFocus}>
      <View style={styles.searchIcon}>
        <FontAwesomeIcon icon={faSearch} color={colors.colorBlue2} />
      </View>
      <TextInput
        ref={textinputRef}
        placeholder={props.placeholder}
        style={styles.searchInput}
        value={search}
        onChangeText={value => handleSearch(value)}
      />
    </Pressable>
  );
};

Search.defaultProps = {
  onSearch: () => {},
  placeholder: 'Search',
};

Search.propTypes = {
  onSearch: PropTypes.func,
  placeholder: PropTypes.string,
};

export default Search;
