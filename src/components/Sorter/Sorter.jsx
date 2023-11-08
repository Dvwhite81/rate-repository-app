import { View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import TextInput from '../Form/TextInput';
import styles from '../../styles';

const Sorter = ({ handleOrder, searchKeyword, setSearchKeyword }) => {
  const options = [
    { value: 'latest',
      label: 'Latest Repositories',
      orderBy: 'CREATED_AT',
      orderDirection: 'DESC' },
    { value: 'highest',
      label: 'Highest Rated Repositories',
      orderBy: 'RATING_AVERAGE',
      orderDirection: 'DESC' },
    { value: 'lowest',
      label: 'Lowest Rated Repositories',
      orderBy: 'RATING_AVERAGE',
      orderDirection: 'ASC' },
  ];

  const handleOption = (value) => {
    const option = options.find(o => o.value === value);
    handleOrder(option);
  };

  return (
    <View style={styles.pickerContainer}>
      <TextInput
        style={styles.pickerSearch}
        name='searchbar'
        value={searchKeyword}
        placeholder='Search for repo...'
        placeholderTextColor='lightgray'
        onChangeText={(text) => setSearchKeyword(text)}
      />
      <Picker
        style={styles.pickerStyles}
        onValueChange={(option) => handleOption(option)}
      >
        {
          options.map(option =>
            <Picker.Item
              key={option.value}
              label={option.label}
              value={option.value}
            />
          )
        }
      </Picker>
    </View>
  )
};

export default Sorter;
