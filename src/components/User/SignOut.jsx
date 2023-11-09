import { useApolloClient } from '@apollo/client';
import useAuthStorage from '../../hooks/useAuthStorage';
import { useNavigate } from 'react-router-dom';
import { Pressable, View } from 'react-native';
import Tab from '../AppBar/Tab';
import styles from '../../styles';

export const SignOutContainer = ({ onSubmit }) => {
  return (
    <View style={styles.tab}>
      <Pressable onPress={onSubmit}>
        <Tab text='Sign Out' />
      </Pressable>
    </View>
  );
};

const SignOut = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const navigate = useNavigate();

  const onSubmit = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    navigate('/');
  };

  return (
    <SignOutContainer onSubmit={onSubmit} />
  );
};

export default SignOut;
