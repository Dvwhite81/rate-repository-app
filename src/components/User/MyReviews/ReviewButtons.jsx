import { Alert, Pressable, View } from 'react-native';
import { useNavigate } from 'react-router';
import Text from '../../Text';
import styles from '../../../styles';

const ReviewButtons = ({item, handleDelete}) => {
  const navigate = useNavigate();
  const id = item.repository.id;
  console.log('reviewButtons item:', item.repository.id)

  const handleView = () => {
    navigate(`/${id}`);
  };

  const confirmDelete = () => {
    Alert.alert(
      'Delete Review',
      'Are you sure you want to delete this review?',
      [
        {
          text: 'Cancel',
          onPress: () => Alert.alert('Canceled'),
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => handleDelete(item.id),
        },
      ],
      {
        cancelable: true,
      },
    );
  };

  return (
    <View style={styles.reviewButtons}>
      <Pressable
        style={styles.viewButton}
        onPress={() => handleView()}
      >
        <Text style={styles.reviewBtnText}>View Repository</Text>
      </Pressable>
      <Pressable
        style={styles.deleteButton}
        onPress={() => confirmDelete()}
      >
        <Text style={styles.reviewBtnText}>Delete Review</Text>
      </Pressable>
    </View>
  )
};

export default ReviewButtons;
