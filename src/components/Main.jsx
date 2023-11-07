import { View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';
import AppBar from './AppBar/AppBar';
import RepositoryList from './RepositoryList';
import styles from '../styles';
import SignIn from './SignIn';
import SignOut from './SignOut';
import SingleRepo from './RepositoryItem/SingleRepo';

const Main = () => {
  return (
    <View style={styles.mainContainer}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/signin" element={<SignIn />} exact />
        <Route path="/signout" element={<SignOut />} exact />
        <Route path="/:id" element={<SingleRepo />} exact />
        <Route path="*" element={<Navigate to='/' replace />} />
      </Routes>
    </View>
  );
};

export default Main;
