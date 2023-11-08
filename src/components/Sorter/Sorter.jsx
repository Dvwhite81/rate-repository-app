import { Picker } from '@react-native-picker/picker';
import styles from '../../styles';
import { View } from 'react-native';

const Sorter = ({ handleOrder }) => {
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
